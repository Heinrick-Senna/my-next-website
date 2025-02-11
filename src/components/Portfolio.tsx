"use client"

import { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions, KeenSliderPlugin, SliderInstance } from "keen-slider";
import Card, { IProjectCard } from "./Card";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { use, useEffect, useState } from "react";

type TSlider = SliderInstance<KeenSliderOptions<{}, {}, KeenSliderHooks>, KeenSliderInstance<{}, {}, KeenSliderHooks>, KeenSliderHooks>

const projects: IProjectCard[] = [
    {
        name: 'Integração Nasajon',
        projectType: 'Backend',
        thumbnail: '../Nasajon.jpg',
        projectTags: ['Nodejs', 'Nestjs', 'mySQL', 'Jenkins'],
    },
    {
        name: 'My Personal Website',
        projectType: 'Frontend',
        thumbnail: '../NextWebsite.webp',
        projectTags: ['Nodejs', 'NextJs', 'S3', 'Vercel', 'CloudFlare'],
    },
    {
        name: 'Webscrapping App',
        projectType: 'Fullstack',
        thumbnail: '../Crawler.webp',
        projectTags: ['NodeJS', 'ElectronJS', 'PuppeteerJS'],
    },
    {
        name: 'Micro-Frontend Theme',
        projectType: 'Frontend',
        thumbnail: '../Microfrontend.png',
        projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
    }
]

const mountCarousel = (slider: TSlider) => {
    const z = slider.container.clientWidth + 20;
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
}

const rotateCarousel = (slider: TSlider) => {
    const z = slider.container.clientWidth + 20;
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
}


const carouselPlugin: KeenSliderPlugin = (slider) => {
    slider.on("created", () => {
        mountCarousel(slider)
        rotateCarousel(slider)
    })
    slider.on('updated', rotateCarousel);
    slider.on("detailsChanged", rotateCarousel);
}

const classPlugin: KeenSliderPlugin = (slider) => {
    let active: HTMLElement;

    slider.on('slideChanged', () => {
        active?.classList.remove('active')
        active = slider.slides[slider.track.details.rel];
        active.classList.add('active')
    })
    slider.on('created', () => {
        active?.classList.remove('active')
        active = slider.slides[slider.track.details.rel];
        active.classList.add('active')
    })
}

const sliderOptions: KeenSliderOptions = {
    loop: true,
    selector: ".carousel__cell",
    renderMode: "custom",
    slides: {
        perView: 1,

        spacing: 50
    },
    mode: "free-snap"
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default function Portfolio() {
    const [sliderSliderRef, internalSlider] = useKeenSlider<HTMLDivElement>(sliderOptions, [carouselPlugin, classPlugin])
    const size = useWindowSize();

    useEffect(() => {
        const timeout = setTimeout(() => {
            const slider = internalSlider.current;
            if (!slider) return;

            mountCarousel(slider)
            rotateCarousel(slider)
        }, 100);

        return () => clearInterval(timeout)
    }, [size]);

    useEffect(() => {
        internalSlider.current?.update({
            ...sliderOptions
        });
    }, [internalSlider, sliderOptions]);

    return (
        <div className="scene">
            <div className="carousel keen-slider" ref={sliderSliderRef}>
                {projects.map((project, i) => <Card key={i} data={project} />)}
            </div>
        </div>
    )
}