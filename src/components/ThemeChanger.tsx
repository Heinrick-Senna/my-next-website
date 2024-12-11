"use client"

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { CiDark } from "react-icons/ci";
import { TfiShine } from "react-icons/tfi";
import './ThemeChanger.css';
import { IoClose } from "react-icons/io5";

export default function ThemeChanger() {
    const [hover, setHover] = useState<'light' | 'dark' | 'system' | null>(null);
    const { themeState, setThemeState } = useContext(ThemeContext);

    return (
        <div className={`absolute top-5 left-5 flex z-[2] cursor-pointer gap-6 ThemeList ${themeState} ${hover ? hover + '-hover' : ''}`} >
            <button
                className="light"
                onMouseLeave={() => setHover(null)}
                onMouseOver={(e) => setThemeState(e.currentTarget.className as any)}
                onClick={(e) => setThemeState(e.currentTarget.className as any)}
            >
                <TfiShine size={26} />
            </button>
            <button
                className="dark"
                onMouseLeave={() => setHover(null)}
                onMouseOver={(e) => setHover(e.currentTarget.className as any)}
                onClick={(e) => setThemeState(e.currentTarget.className as any)}
            >
                <CiDark size={26} />
            </button>
            <button
                className="system"
                onMouseLeave={() => setHover(null)}
                onMouseOver={(e) => setHover(e.currentTarget.className as any)}
                onClick={(e) => setThemeState(e.currentTarget.className as any)}
            >
                <IoClose size={26} />
            </button>
        </div>
    );
}