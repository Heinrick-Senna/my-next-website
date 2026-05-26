import './MenuList.css'
import Link from 'next/link';

const menuItem = `radius-2 px-4 py-2 font-semibold rounded-md border-2 border-current border-solid cursor-pointer menu-item`;

export default function MenuList() {
    return (
        <ul className="w-full gap-y-4 flex justify-evenly select-none min-w-[15vw] flex-col menu-list sm:flex-row">
            <Link href={'/about'} className={menuItem} prefetch={true}>
                <span>Sobre</span>
            </Link>
            <Link href={'portfolio'} className={menuItem} prefetch={true}>
                <span>Portfolio</span>
            </Link>
            <Link href={'/blog'} className={menuItem} prefetch={true}>
                <span>Blog</span>
            </Link>
        </ul>
    );
}
