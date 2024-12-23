"use client"

import MenuList from "./MenuList";
import { useState } from "react";
import Title from "./Title";
import About from "./About";
import Portfolio from "./Portfolio";

export type TPages = 'about' | 'portfolio' | 'home';

export default function Container() {
    const [page, setPage] = useState<TPages>('home');

    return (
        <>
            {page == 'home' && <Title />}
            {page == 'about' && <About setPage={setPage} />}
            {page == 'portfolio' && <Portfolio />}
            <MenuList page={page} setPage={setPage} />
        </>
    );
}
