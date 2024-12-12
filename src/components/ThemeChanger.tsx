"use client"

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { CiDark } from "react-icons/ci";
import { TfiShine } from "react-icons/tfi";
import './ThemeChanger.css';
import { IoClose } from "react-icons/io5";

export default function ThemeChanger() {
    const { themeState, setThemeState } = useContext(ThemeContext);
    const [isThemeSelected, setIsThemeSelected] = useState<boolean>(false)
    const [lastTheme, setLastTheme] = useState<'light' | 'dark' | 'system' | null>(null)

    const mouseHoverHandler = (e: any) => {
        setLastTheme(themeState);
        setThemeState(e.currentTarget?.className as any);
        setIsThemeSelected(false);
    }

    const mouseClickHandler = () => {
        setIsThemeSelected(true);
    }

    const mouseLeaveHandler = () => {
        if (!isThemeSelected) setThemeState(lastTheme ? lastTheme : 'system');
        setLastTheme(null);
        setIsThemeSelected(false);
    }

    return (
        <div className={`absolute top-5 left-5 flex z-[2] cursor-pointer gap-6 ThemeList ${themeState}`} >
            <button
                className="light"
                onMouseLeave={mouseLeaveHandler}
                onMouseEnter={mouseHoverHandler}
                onClick={mouseClickHandler}
            >
                <TfiShine size={26} />
            </button>
            <button
                className="dark"
                onMouseLeave={mouseLeaveHandler}
                onMouseEnter={mouseHoverHandler}
                onClick={mouseClickHandler}
            >
                <CiDark size={26} />
            </button>
            <button
                className="system"
                onMouseLeave={mouseLeaveHandler}
                onMouseEnter={mouseHoverHandler}
                onClick={mouseClickHandler}
            >
                <IoClose size={26} />
            </button>
        </div>
    );
}
