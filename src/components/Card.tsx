"use client"

import { useState } from "react";

export interface IProjectCard {
    name: string;
    projectType: 'Frontend' | 'Backend' | 'Fullstack';
    projectTags: string[];
}

export default function Card({ data }: { data: IProjectCard }) {
    const [open, setOpen] = useState<boolean>(false);
    const classType = data.projectType == 'Backend' ? 'bg-foreground text-background' : '';

    return (
        <div className="relative">
            <div
                onClick={() => setOpen(!open)}
                className={`${open ? 'rounded-t-md' : 'rounded-md hover:scale-110'} bg-background flex flex-col border-2 p-3 w-full gap-2 cursor-pointer transition`}>
                
                <div className="flex justify-between">
                    <span className="p-2 text-xl font-black">{data.name}</span>
                    <span className={`p-2 rounded-md font-bold ${classType}`}>{data.projectType}</span>
                </div>
                
                <div className={`flex gap-4 text-xs font-bold`}>
                    {
                        data.projectTags.map((tag, i) => <span key={i} className="bg-foreground text-background py-1 px-2 rounded-md">{tag}</span>)
                    }
                </div>

            </div>
            {open && (
                <div className="border-2 border-t-0 p-2 pt-4 w-full text-sm">
                    <span>teste teste</span>
                    <span>teste teste</span>
                    <span>teste teste</span>
                </div>
            )}
        </div>
    )
}