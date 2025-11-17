import { ReactElement } from "react";

export interface IProjectCard {
    name: string;
    projectType: 'Frontend' | 'Backend' | 'Fullstack';
    description: ReactElement;
    thumbnail_black: string;
    thumbnail_white: string;
    projectTags: string[];
}

export default function Card({ data }: { data: IProjectCard }) {
    return (
        <>

            <div className="absolute flex flex-wrap justify-between items-center top-0 translate-y-[calc(-100%-.75rem)] w-full title-span">
                <span className="font-extrabold text-xl h-fit">{data.name}</span>
                <span className="p-2 rounded-md font-bold border-2 border-current">{data.projectType}</span>
            </div>

            <div
                className="thumb-white absolute w-full h-full left-0 top-0 z-[-1] transition-opacity duration-[400ms]"
                aria-label={`Project thumbnail for ${data.name}`}
                style={{
                    backgroundImage: `url(${data.thumbnail_white})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div
                className="thumb-black absolute w-full h-full left-0 top-0 z-[-1] transition-opacity duration-[400ms]"
                aria-label={`Project thumbnail for ${data.name}`}
                style={{
                    backgroundImage: `url(${data.thumbnail_black})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <div className="flex flex-wrap gap-4 text-xs font-bold h-auto items-start p-4">
                {
                    data.projectTags.slice(0, 4).map((tag, i) => <span key={i} className="bg-foreground text-background p-2 rounded-md">{tag}</span>)
                }
            </div>

        </>
    )
}