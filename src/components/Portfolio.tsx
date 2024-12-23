import Card, { IProjectCard } from "./Card";

export default function Portfolio() {
    const projects: IProjectCard[] = [
        {
            name: 'Nasajon',
            projectType: 'Backend',
            projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
        },
        {
            name: 'Nasajon',
            projectType: 'Backend',
            projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
        },
        {
            name: 'Nasajon',
            projectType: 'Backend',
            projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
        },
        {
            name: 'Nasajon',
            projectType: 'Backend',
            projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
        },
        {
            name: 'Nasajon',
            projectType: 'Backend',
            projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
        },
        {
            name: 'Nasajon',
            projectType: 'Backend',
            projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
        },
    ]

    return (
        <div className="flex flex-col gap-8 w-[calc(30vw+2rem)] px-8 max-h-[40vh] bg-red overflow-x-auto">
            {projects.map((project, i) => <Card key={i} data={project} />)}
        </div>
    )
}