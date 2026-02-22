

import { Slabo_27px } from "next/font/google";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

const slabo27px = Slabo_27px({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export default function About() {
    return (
        <>
            <h2 className="flex justify-between items-center w-full text-3xl sm:text-2xl font-medium dissipate-animation">
                Marcelo H R Senna - Desenvolvedor de software
                <Link href={'/'} className="cursor-pointer">
                    <IoClose size={24} />
                </Link>
            </h2>
            <div className={`flex flex-col gap-5 about-in text-xl indent-4 ${slabo27px.className}`}>
                <p>
                    Me chamo Marcelo e sou um programador 👨‍💻, tenho 23 anos e estou envolvido na área da tecnologia desde os 15, 3 como entusiasta e apaixonado,
                    e depois mais 5 anos como profissional bastante requisitado na área.
                </p>
                <p>
                    Meu objetivo é ampliar meu conhecimento e alcançar um cargo de plena liderança,
                    eu gostaria muito de ser reconhecido na comunidade de programação.
                    Sobre as minhas habilidades técnicas, posso dizer que são bem versáteis e abrangem muitas frentes quando se trata de desenvolvimento, 
                    mas uma das minhas habilidades mais úteis e importantes é a comunicação limpa e transparente. 
                </p>
                <p>
                    Desenvolvedor FullStack com linguagem principal sendo NodeJS (NestJS, Javascript, React e NextJS).
                    Atualmente estou estudando Cloud Computing e pretendo aprender mais ainda sobre arquitetura e processos. 
                </p>
            </div >
        </>
    );
}
