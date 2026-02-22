import { Dispatch, SetStateAction } from "react";
import { IProjectCard } from "./Card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Slabo_27px } from "next/font/google";

export interface IDialogCard {
    selectedProject: IProjectCard | null;
    setSelectedProject: Dispatch<SetStateAction<IProjectCard | null>>;
}

const slabo27px = Slabo_27px({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export default function CardDialog({ selectedProject, setSelectedProject }: IDialogCard) {
    return (
        <>
            <Dialog
                modal={true}
                open={!!selectedProject}
                onOpenChange={(open) => !open && setSelectedProject(null)}
            >
                <DialogContent className="max-w-xs sm:max-w-screen-xl max-h-[80vh] overflow-auto dialog-content-animated">
                    <DialogHeader className="flex flex-col gap-2">
                        <DialogTitle className="text-2xl">{selectedProject?.name} - {selectedProject?.projectType}</DialogTitle>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject?.projectTags.map((tag, i) => (
                                <span key={i} className="bg-muted px-2 py-1 rounded text-xs border-current border-2">{tag}</span>
                            ))}
                        </div>
                    </DialogHeader>
                    <div className="space-y-2">
                        <div className={`px-2 flex flex-col gap-2 indent-2 text-xl ${slabo27px.className}`}>
                            {selectedProject?.description}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}