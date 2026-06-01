"use client"

import { KeenSliderHooks, KeenSliderInstance, KeenSliderOptions, KeenSliderPlugin, SliderInstance } from "keen-slider";
import Card, { IProjectCard } from "@/components/Card";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { use, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CardDialog from "@/components/CardDialog";

type TSlider = SliderInstance<KeenSliderOptions<{}, {}, KeenSliderHooks>, KeenSliderInstance<{}, {}, KeenSliderHooks>, KeenSliderHooks>

const projects: IProjectCard[] = [
    {
        name: 'Integração de ERP para BPO',
        projectType: 'Backend',
        thumbnail_white: '../PLLBlack.png',
        thumbnail_black: '../PLLWhite.jpg',
        description: <>
            <p>
                Desenvolvedor principal de uma integração de sistemas entre a maior BPO da América Latina <a className="text-blue-600" target="_blank" href="https://grupopll.com.br">Grupo PLL</a> e o seu,
                <span className="italic"> agora atual,</span> sistema de ERP.
            </p>
            <p>
                Projeto foi desenvolvido <span className="italic text-muted-foreground"> principalmente mas não somente,</span> em Nest.js e MySQL.
            </p>
            <p>
                Uma das principais funcionalidade da API é o cadastro e atualização de entidades dentro do sistema do ERP em formato de filas, criada e geridas diratemente pelo DB (MySQL), uma das suas funções também
                é a consulta e reserva de peças que envolve: pedidos de peças, reserva do pedido, criação de uma fração de um tipo de peça, devolução de fração de peça, dentre outras.
            </p>
            <p>
                O objetivo do projeto é facilitar a usabilidade do sistema da BPO para funcionários internos tanto nas operações em laborátorio quanto em operações envolvendo processos fiscais que agora, são feitas com mais facilidade e controle dentro do sistema de ERP.
            </p>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'MySQL', 'Jenkins'],
    },
    {
        name: 'Integração TikTok Seller API',
        projectType: 'Backend',
        thumbnail_white: '../PLLBlack.png',
        thumbnail_black: '../PLLWhite.jpg',
        description: <>
            <p>
                Desenvolvi uma API de integração entre a plataforma Webstore e o TikTok Shop, permitindo que os lojistas da Webstore gerenciem seus pedidos do TikTok diretamente pelo
                ecossistema ao qual já estão habituados. O projeto foi construído com NestJS e TypeScript, seguindo arquitetura modular com separação clara de responsabilidades entre
                autorização, produtos e pedidos.
            </p>

            <p>
                O núcleo da integração cobre o ciclo de vida completo de um pedido: listagem com mapeamento de status (confirmado, aguardando envio, em trânsito, entregue), upload de Nota
                Fiscal eletrônica (NF-e) em XML para conformidade fiscal brasileira, atualização de rastreamento junto às transportadoras e confirmação de entrega via API do TikTok. Um
                desafio técnico relevante foi o tratamento das diferenças de modelo entre as plataformas — como a ausência do status "processing" no TikTok, resolvida com uma camada de
                compatibilidade que garante a rastreabilidade interna sem violar o contrato da API externa.
            </p>
            <p>
                A solução também implementa o fluxo OAuth 2.0 para autorização da loja pelo vendedor, sincronização de catálogo de produtos com upload automático de imagens, e um mecanismo de
                assinatura de requisições exigido pela API do TikTok. O projeto foi entregue com logs estruturados em todos os endpoints críticos, facilitando o monitoramento e o diagnóstico
                de falhas em produção.
            </p>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'MySQL', 'Jenkins'],
    },
    {
        name: 'Meta Cloud API (Whatasapp Oficial API)',
        projectType: 'Backend',
        thumbnail_black: '../PLLMetaWhite.webp',
        thumbnail_white: '../PLLMetaBlack.webp',
        description: <>
            <p>Esta é uma aplicação desenvolvida em NestJS que faz uso do Meta Cloud API</p>
            <p>
                A aplicação tem como principal foco o envio de notificações para clientes externos, internos e colaboradores da empresa.
            </p>
            <p>
                Essa integração usa de uma arquitetura de filas em MySQL, garantindo gestão e métrica mediante todas as mensagens enviadas, está API criada em NestJS é usada para gerir tanto o envio de mensagens quanto as normativas relativas às mesmas.
            </p>
            <p>
                Um diferencial da aplicação é a capacidade de adaptação quanto ao envio de templates e preenchimento de variáveis, contando com validação de bad list de palavras e preenchimento dinâmico de váriaveis de maneira configurável.
            </p>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'MySQL'],
    },
    {
        name: 'Meu Website Pessoal',
        projectType: 'Frontend',
        thumbnail_black: '../NextWhite.webp',
        thumbnail_white: '../NextBlack.webp',
        description: <>
            <p>
                Este é um Website construído em NextJs, que usa de um sistema de páginas estáticas geradas do lado do servidor para garantir mais eficiencia na renderização.
            </p>
            <p>
                Além disso o site conta com um Frontend interativo inteiramente feito por mim, incluindo os textos, imagens, composições e animações como o background e mudança de temas.
                Vale mencionar o uso da biblioteca Keen-Slide para o carrossel de portfólio.
            </p>
            <p>
                O uso de Inteligência Artificial se deu apenas na etapa de construção dos componentes das imagens, ainda sim, as editei no Adobe PhotoshopCS6 para seguirem o mesmo padrão de visual.
            </p>
        </>,
        projectTags: ['Nodejs', 'NextJs', 'S3', 'Vercel', 'CloudFlare'],
    },

    {
        name: 'Micro-Frontend Theme',
        projectType: 'Frontend',
        thumbnail_white: '../WebstoreBlack.jpg',
        thumbnail_black: '../WebstoreWhite.jpg',
        description: <>
            <div>teste</div>
        </>,
        projectTags: ['Nodejs', 'Nestjs', 'mySQL'],
    },
    {
        name: 'Webscrapping App',
        projectType: 'Fullstack',
        thumbnail_black: '../PuppeteerWhite.webp',
        thumbnail_white: '../PuppeteerBlack.webp',
        description: <>
            <div>teste</div>
        </>,
        projectTags: ['NodeJS', 'ElectronJS', 'PuppeteerJS'],
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
                                if (e.key == 'Enter' && i == internalSlider.current?.track.details.rel) {
                                    setSelectedProject(project);
                                }
                            }}
                            tabIndex={i == internalSlider.current?.track.details.rel ? 0 : undefined}
                            className={`group relative rounded-md bg-black flex flex-col justify-start cursor-pointer carousel__cell `}
                        >
                            <Card key={i} data={project} />
                        </div>
                    ))}
                </div>
            </div>

            <CardDialog
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
            />
        </>

    )
}