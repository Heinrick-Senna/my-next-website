"use client"

import PageSelector from "@/components/PageSelector";
import MenuList from "./MenuList";
import { useState } from "react";

export type TPages = 'about' | 'projects';

export default function Container() {
    const [page, setPage] = useState<TPages>('about');

    return (
        <>
            <PageSelector page={page} />
            <MenuList setPage={setPage} />
        </>
    );
}
