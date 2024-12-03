import { TPages } from '@/utils/types';
import './MenuList.css'
import { Dispatch, SetStateAction } from 'react';

const menuItem = `radius-2 px-4 py-2 rounded-md cursor-pointer menu-item`;

export default function MenuList({ setPage }: { setPage: Dispatch<SetStateAction<TPages>> }) {
    return (
        <ul className="w-full flex justify-evenly menu-list select-none">
            <li>
                <span className={menuItem} onClick={() => setPage('about')} >Sobre</span>
            </li>
            <li>
                <span className={menuItem} onClick={() => setPage('projects')}>Portfolio</span>
            </li>
        </ul>
    );
}
