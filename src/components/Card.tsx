export interface IProjectCard {
    name: string;
    projectType: 'Frontend' | 'Backend' | 'Fullstack';
    thumbnail: string;
    projectTags: string[];
}

export default function Card({ data }: { data: IProjectCard }) {
    return (
        <div className="relative rounded-md bg-black flex flex-col border-current border-2 p-3 gap-2 justify-start cursor-pointer carousel__cell">
            
            <div 
                className="absolute w-full h-full left-0 top-0 z-[-1]"
                aria-label={`Project thumbnail for ${data.name}`}
                style={{
                    backgroundImage: `url(${data.thumbnail})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />


            <div className="flex flex-wrap justify-between items-center">
                <span className="p-2 rounded-md font-extrabold text-xl bg-backgroundOpacity/25 h-fit">{data.name}</span>
                <span className="p-2 rounded-md font-bold bg-backgroundOpacity/65 border-2 border-current">{data.projectType}</span>
            </div>

            <div className="flex flex-wrap gap-4 text-xs font-bold h-auto items-start">
                {
                    data.projectTags.map((tag, i) => <span key={i} className="bg-foreground text-background py-1 px-2 rounded-md">{tag}</span>)
                }
            </div>

        </div >
    )
}