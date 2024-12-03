"use client"

import PageSelector from "@/components/PageSelector";
import MenuList from "./MenuList";
import { useState } from "react";
import { TPages } from "@/utils/types";

export default function Container() {
    const [page, setPage] = useState<TPages>('about');

    return (
        <>
            <PageSelector page={page} />
            <MenuList setPage={setPage} />
        </>
    );
}
