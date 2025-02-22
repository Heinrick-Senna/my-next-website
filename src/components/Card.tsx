export interface IProjectCard {
    name: string;
    projectType: 'Frontend' | 'Backend' | 'Fullstack';
    thumbnail: string;
    projectTags: string[];
}

export default function Card({ data }: { data: IProjectCard }) {
    return (
        <div
            className={`rounded-md carousel__cell bg-black flex flex-col border-current border-2 p-3 gap-2 justify-start cursor-pointer`}
            style={{
                backgroundImage: `url(${data.thumbnail})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

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