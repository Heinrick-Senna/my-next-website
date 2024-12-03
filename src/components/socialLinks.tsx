import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const listItem = `cursor-pointer flex flex-col items-center`;

export default function SocialLinks() {
    return (
        <ul className="flex flex-row justify-center flex-wrap gap-5 md:gap-8 group select-none">
            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://google.com.br" className={listItem} >
                    <span>Gmail</span>
                    <MdEmail style={{ transform: 'scale(1.2)', transformOrigin: 'bottom' }} size={24} />
                </a>
            </li>

            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://google.com.br" className={listItem}>
                    <span>Linkedin</span>
                    <FaLinkedin size={24} />
                </a>
            </li>

            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://google.com.br" className={listItem}>
                    <span>GitHub</span>
                    <FaGithub size={24} />
                </a>
            </li>

            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://google.com.br" className={listItem}>
                    <span>WhatsApp</span>
                    <IoLogoWhatsapp size={24} />
                </a>
            </li>

        </ul>
    );
}
