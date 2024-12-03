import Link from 'next/link';
import './MenuList.css'

const menuItem = `radius-2 px-4 py-2 rounded-md cursor-pointer menu-item`;

export default function MenuList() {
    return (
        <ul className="w-full flex justify-evenly menu-list select-none">
            <li className={menuItem}>
                <Link href={'/teste'}>Sobre</Link>
            </li>
            <li className={menuItem}>
                <Link href={'/teste'}>Portfolio</Link>
            </li>
        </ul>
    );
}
