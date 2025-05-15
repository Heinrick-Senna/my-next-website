import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineCubeTransparent } from "react-icons/hi";

const listItem = `cursor-pointer flex flex-col items-center`;

export default function SocialLinks() {
    return (
        <ul className="flex flex-row justify-center flex-wrap gap-5 md:gap-8 group select-none">
            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="mailto:marcelohz198@gmail.com" className={listItem} >
                    <span>Gmail</span>
                    <MdEmail style={{ transform: 'scale(1.1)', transformOrigin: 'bottom' }} size={24} />
                </a>
            </li>

            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://www.linkedin.com/in/marcelo-heinrick/" className={listItem}>
                    <span>Linkedin</span>
                    <FaLinkedin size={24} />
                </a>
            </li>


            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://github.com/Heinrick-Senna" className={listItem}>
                    <span>GitHub</span>
                    <FaGithub size={24} />
                </a>
            </li>

            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://wa.me/5511967240380" className={listItem}>
                    <span>WhatsApp</span>
                    <IoLogoWhatsapp size={24} />
                </a>
            </li>
            
            <li className="group-hover:blur-sm hover:!blur-none hover:scale-125 transition">
                <a target="__blank" href="https://selenetech.com.br" className={listItem}>
                    <span>SeleneTech</span>
                    <HiOutlineCubeTransparent size={24} />
                </a>
            </li>

        </ul>
    );
}
