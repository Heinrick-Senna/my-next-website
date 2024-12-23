import { Dispatch, SetStateAction } from "react";
import { TPages } from "./Container";
import { IoClose } from "react-icons/io5";

export default function About({ setPage }: { setPage: Dispatch<SetStateAction<TPages>> }) {
    return (
        <>
            <h2 className="flex justify-between items-center w-full text-3xl sm:text-2xl font-medium dissipate-animation">
                Marcelo H R Senna - Desenvolvedor de software
                <span className="cursor-pointer" onClick={() => setPage('home')}>
                    <IoClose size={24} />
                </span>
            </h2>
            <div className="flex flex-col gap-5 about-in">
                <span>
                    Tenho 21 anos e estou envolvido na área da tecnologia desde os 15, 7 como entusiasta, e 4 anos como profissional na área.
                </span>
                <span>
                    Meu objetivo é ampliar meu conhecimento e alcançar um cargo de plena liderança, eu gostaria muito de ser reconhecido na comunidade de programação.
                </span>
                <span className="flex flex-col">
                    <span>
                        Sobre as minhas habilidades técnicas, posso dizer que são bem versáteis e abraagem muitas frentes quando se trata de desenvolvimento.
                    </span>
                    <span>
                        Experiência na criação e manutenção de API's.
                    </span>
                </span>
                <span>
                    Desenvolvedor FullStack com foco em Node.js. Atualmente estou estudando Cloud Computing.
                </span>

                {/* Eu estou envolvido com programação desde os 15 anos, isto é, 6 anos como entusiasta e 4 anos como profissional na área.

Meu idioma nativo é Português (Brasil), sei falar também Inglês, Espanhol e estou aprendendo Russo. Привет, мир!

Decidi criar este site para compilar meus portfólios profissionais, projetos pessoais e também falar um pouco sobre mim.

Apesar do meu foco ser em programação e código, gosto de aprimorar também outras skills importantes, como por exemplo, comunicação segura e feedbacks efetivos. Tenho também skills em outras áreas: -Criação e edição de vídeo, E-Commerce, Marketing, Ensino prático, dentre outras.

Estou aberto a propostas. */}
            </div>
        </>
    );
}
