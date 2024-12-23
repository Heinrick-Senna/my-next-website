import { Dispatch, SetStateAction } from 'react';
import { TPages } from './Container';
import './MenuList.css'

const menuItem = `radius-2 px-4 py-2 font-semibold rounded-md border-2 border-current border-solid cursor-pointer menu-item`;

export default function MenuList({ setPage, page }: { setPage: Dispatch<SetStateAction<TPages>>, page: TPages }) {
    return (
        <ul className="w-full flex justify-evenly menu-list select-none min-w-[15vw]">
            <li onClick={() => setPage('about')} className={menuItem}>
                <span>Sobre</span>
            </li>
            <li onClick={() => setPage('portfolio')} className={menuItem}>
                <span>Portfolio</span>
            </li>
        </ul>
    );
}
