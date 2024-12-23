"use client"

import { ThemeContext } from "@/contexts/ThemeContext";
import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
  alpha: number;
  disabled: boolean;
}

interface SplashParticle {
  x: number;
  y: number;
  alpha: number;  // Para desvanecimento
  size: number; // Tamanho da partícula
  velocityX: number; // Velocidade horizontal
  velocityY: number; // Velocidade vertical
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      const infos = document.body.getBoundingClientRect();
      setSize([infos.width, infos.height]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function RainEffect() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [paused] = useState(false);
  const drops = useRef<Drop[]>([]);
  const splashes = useRef<SplashParticle[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const { theme } = useContext(ThemeContext);
  const [rainColor, setRainColor] = useState<string>(theme == 'dark' ? '255, 255, 255' : '0, 0, 0');
  const [raining, setRaining] = useState<boolean>(true);
  const [width, height] = useWindowSize();

  const insertAllDrops = (i: number, rainSize: number) => {
    drops.current.push({
      x: Math.random() * window.innerWidth,
      y: -10,
      alpha: Math.random() * 1,
      speed: Math.random() * 2 + 2,
      length: Math.random() * 20 + 10,
      disabled: !raining
    });

    if (i < rainSize) setTimeout(() => insertAllDrops(i + 1, rainSize), Math.random() * 200);
  }

  useEffect(() => {
    setRainColor(theme == 'dark' ? '255, 255, 255' : '0, 0, 0')
  }, [theme]);

  useEffect(() => {
    if (raining) insertAllDrops(0, 100 - drops.current.length);
  }, [raining]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const createSplash = (x: number, y: number) => {
      for (let i = 0; i < 5; i++) {
        splashes.current.push({
          x,
          y,
          alpha: 1,
          size: Math.random() * 3 + 1,
          velocityX: (Math.random() - 0.75) * 2, // Velocidade horizontal aleatória
          velocityY: Math.random() * -2.25, // Velocidade vertical para cima
        });
      }
    };

    const drawRainDrops = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar gotas de chuva
      drops.current.forEach((drop) => {
        if (drop.disabled) return;
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.strokeStyle = `rgba(${rainColor}, ${drop.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Desenhar partículas de impacto
      splashes.current.forEach((splash) => {
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, splash.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rainColor}, ${splash.alpha})`;
        ctx.fill();
      });
    };

    const updateRainDrops = () => {
      drops.current.forEach((drop, i) => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          if (!raining) drops.current.splice(i, 1);
          createSplash(drop.x, canvas.height);
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
    };

    const updateSplashes = () => {
      splashes.current.forEach((splash, index) => {
        splash.x += splash.velocityX;
        splash.y += splash.velocityY;
        splash.alpha -= 0.02; // Gradualmente desaparecer
        splash.size -= 0.05; // Gradualmente diminuir

        // Remover partículas que desapareceram
        if (splash.alpha <= 0 || splash.size <= 0) {
          splashes.current.splice(index, 1);
        }
      });
    };

    const animate = () => {
      if (!paused) {
        updateRainDrops();
        updateSplashes();
      }
      drawRainDrops();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [paused, rainColor, width, height]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        zIndex: 1,
        position: 'absolute',
        top: '0',
        left: '0',
        display: "block"
      }} />
  );
};