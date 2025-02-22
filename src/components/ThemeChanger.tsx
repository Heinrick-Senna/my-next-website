"use client"

import { ThemeContext, ThemeProvider, ThemeState } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { CiDark } from "react-icons/ci";
import { TfiShine } from "react-icons/tfi";
import './ThemeChanger.css';
import { IoClose } from "react-icons/io5";

export default function ThemeChanger() {
    const { theme, themeState, setThemeState } = useContext(ThemeContext);
    const [hover, setHover] = useState<ThemeState | null>(null);
    const gap = '.75rem';

    const mouseLeaveHandler = () => setHover(null);
    const mouseEnterHandler = (e: any) => setHover(e.currentTarget.className as ThemeState);
    const mouseClickHandler = (e: any) => setThemeState(e.currentTarget.className as ThemeState);

    return (
        <div className={`absolute top-5 left-5 flex z-[2] cursor-pointer ThemeList ${themeState} ${hover ? hover + '-hover' : ''}`} >
            <button
                className="light"
                style={{ paddingRight: gap }}
                onMouseEnter={mouseEnterHandler}
                onClick={mouseClickHandler}
            >
                <TfiShine size={26} />
            </button>
            <button
                className="dark"
                style={{ paddingLeft: gap, paddingRight: gap }}
                onMouseLeave={mouseLeaveHandler}
                onMouseEnter={mouseEnterHandler}
                onClick={mouseClickHandler}
            >
                <CiDark size={26} />
            </button>
            <button
                className="system"
                style={{ paddingLeft: gap }}
                onMouseLeave={mouseLeaveHandler}
                onMouseEnter={mouseEnterHandler}
                onClick={mouseClickHandler}
            >
                <IoClose size={26} />
            </button>
        </div>
    );
}
