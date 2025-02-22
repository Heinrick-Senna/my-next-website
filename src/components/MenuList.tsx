import './MenuList.css'
import Link from 'next/link';

const menuItem = `radius-2 px-4 py-2 font-semibold rounded-md border-2 border-current border-solid cursor-pointer menu-item`;

export default function MenuList() {
    return (
        <ul className="w-full flex justify-evenly menu-list select-none min-w-[15vw]">
            <Link href={'/about'} className={menuItem}>
                <span>Sobre</span>
            </Link>
            <Link href={'portfolio'} className={menuItem}>
                <span>Portfolio</span>
            </Link>
        </ul>
    );
}
