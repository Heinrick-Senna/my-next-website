"use client"

import { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions, KeenSliderPlugin, SliderInstance } from "keen-slider";
import Card, { IProjectCard } from "@/components/Card";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { use, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type TSlider = SliderInstance<KeenSliderOptions<{}, {}, KeenSliderHooks>, KeenSliderInstance<{}, {}, KeenSliderHooks>, KeenSliderHooks>

const projects: IProjectCard[] = [
    {
        name: 'Integração de ERP para BPO',
        projectType: 'Backend',
        thumbnail_white: '../PLLWhite.jpg',
        thumbnail_black: '../PLLBlack.png',
        description: <>
            <div>
                Desenvolvedor principal de uma integração de sistemas entre a maior BPO da América Latina <a className="text-blue-600" target="_blank" href="https://grupopll.com.br">Grupo PLL</a> e o seu,
                <span className="italic">agora atual,</span> sistema de ERP.
            </div>
            <div>
                Projeto foi desenvolvido em Nest.js e MySQL.
            </div>
            <div>
                A principal funcionalidade da API é o cadastro e atualização de entidades dentro do sistema do ERP em formato de filas, criada e geridas diratemente pelo DB (MySQL), uma das suas funções também
                é a consulta e reserva de peças que envolve: pedidos de peças, reserva do pedido, criação de uma fração de um tipo de peça, devolução de fração de peça, dentre outras.
            </div>
            <div>
                O objetivo do projeto é facilitar a usabilidade do sistema da BPO para funcionários internos tanto nas operações em laborátorio quanto em operações envolvendo processos fiscais que agora, são feitas com mais facilidade e controle dentro do sistema de ERP.
            </div>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'mySQL', 'Jenkins'],
    },
    {
        name: 'My Personal Website',
        projectType: 'Frontend',
        thumbnail_black: '../NextWebsite.webp',
        thumbnail_white: '../NextWebsite.webp',
        description: <>
            <div>teste</div>
        </>,
        projectTags: ['Nodejs', 'NextJs', 'S3', 'Vercel', 'CloudFlare'],
    },
    {
        name: 'Webscrapping App',
        projectType: 'Fullstack',
        thumbnail_black: '../Crawler.webp',
        thumbnail_white: '../Crawler.webp',
        description: <>
            <div>teste</div>
        </>,
        projectTags: ['NodeJS', 'ElectronJS', 'PuppeteerJS'],
    },
    {
        name: 'Micro-Frontend Theme',
        projectType: 'Frontend',
        thumbnail_black: '../Microfrontend.png',
        thumbnail_white: '../Microfrontend.png',
        description: <>
            <div>teste</div>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
    },
    {
        name: 'Whastapp API',
        projectType: 'Backend',
        thumbnail_black: '../Meta.webp',
        thumbnail_white: '../Meta.webp',
        description: <>
            <div>teste</div>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
    }
]

const mountCarousel = (slider: TSlider) => {
    const z = slider.container.clientWidth + 20;
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
}

const rotateCarousel = (slider: TSlider) => {
    const z = slider.container.clientWidth + 20;
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
}


const carouselPlugin: KeenSliderPlugin = (slider) => {
    slider.on("created", () => {
        mountCarousel(slider)
        rotateCarousel(slider)
    })
    slider.on('updated', rotateCarousel);
    slider.on("detailsChanged", rotateCarousel);
}

const classPlugin: KeenSliderPlugin = (slider) => {
    let active: HTMLElement;

    slider.on('slideChanged', () => {
        active?.classList.remove('active')
        active = slider.slides[slider.track.details.rel];
        active.blur();
        active.classList.add('active')
    })
    slider.on('created', () => {
        active?.classList.remove('active')
        active = slider.slides[slider.track.details.rel];
        active.classList.add('active')
    })
}

const onClickPlugin: KeenSliderPlugin = (slider) => {
    slider.on('created', () => {
        slider.slides.forEach((slide, i) => {
            slide.addEventListener('click', () => {
                if (slider.track.details.rel != i) slider.moveToIdx(i);
            });
        })
    })
}

const sliderOptions: KeenSliderOptions = {
    loop: true,
    selector: ".carousel__cell",
    renderMode: "custom",
    slides: {
        perView: 1,

        spacing: 50
    },
    mode: "free-snap"
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default function Portfolio() {
    const [sliderSliderRef, internalSlider] = useKeenSlider<HTMLDivElement>(sliderOptions, [carouselPlugin, classPlugin, onClickPlugin])
    const size = useWindowSize();
    const [selectedProject, setSelectedProject] = useState<IProjectCard | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const slider = internalSlider.current;
            if (!slider) return;

            mountCarousel(slider)
            rotateCarousel(slider)
        }, 100);

        return () => clearInterval(timeout)
    }, [size]);

    useEffect(() => {
        internalSlider.current?.update({ ...sliderOptions });
    }, [internalSlider, sliderOptions]);

    return (
        <>
            <div className="scene">
                <div className="carousel keen-slider" ref={sliderSliderRef}>
                    {projects.map((project, i) => (
                        <div
                            onClick={() => internalSlider.current?.track.details.rel == i ? setSelectedProject(project) : null}
                            onKeyUp={(e) => {
                                if (e.key != 'Enter') return;

                                if (i == internalSlider.current?.track.details.rel) return setSelectedProject(project);

                                return internalSlider.current?.moveToIdx(i);
                            }}
                            tabIndex={
                                i == internalSlider.current?.track.details.rel
                                    || i == internalSlider.current?.track.absToRel(internalSlider.current?.track.details.rel - 1)
                                    || i == internalSlider.current?.track.absToRel(internalSlider.current?.track.details.rel + 1)
                                    ? 0 : undefined
                            }
                            className="relative rounded-md bg-black flex flex-col border-current border-2 justify-start cursor-pointer carousel__cell">
                            <Card key={i} data={project} />
                        </div>
                    ))}
                </div>
            </div>

            <Dialog
                modal={true}
                open={!!selectedProject}
                onOpenChange={(open) => !open && setSelectedProject(null)}
            >
                <DialogContent className="max-w-xs sm:max-w-screen-xl max-h-[80vh] overflow-auto dialog-content-animated">
                    <DialogHeader className="flex flex-col gap-2">
                        <DialogTitle>{selectedProject?.name} - {selectedProject?.projectType}</DialogTitle>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject?.projectTags.map((tag, i) => (
                                <span key={i} className="bg-muted px-2 py-1 rounded text-xs border-current border-2">{tag}</span>
                            ))}
                        </div>
                    </DialogHeader>
                    <div className="space-y-2">
                        <div className="px-2 flex flex-col gap-6">
                            {selectedProject?.description}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>

    )
}