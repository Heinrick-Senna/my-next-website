import { TPages } from '@/utils/types';
import './MenuList.css'
import { Dispatch, SetStateAction } from 'react';

const menuItem = `radius-2 px-4 py-2 font-semibold rounded-md border-2 border-current border-solid cursor-pointer menu-item`;

export default function MenuList({ setPage }: { setPage: Dispatch<SetStateAction<TPages>> }) {
    return (
        <ul className="w-full flex justify-evenly menu-list select-none">
            <li onClick={() => setPage('about')} className={menuItem}>
                <span>Sobre</span>
            </li>
            <li onClick={() => setPage('about')} className={menuItem}>
                <span>Portfolio</span>
            </li>
        </ul>
    );
}
