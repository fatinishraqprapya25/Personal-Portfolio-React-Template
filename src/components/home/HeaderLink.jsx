import { NavLink } from 'react-router-dom';

export default function HeaderLink({ path, isActive, children }) {
    return (
        <NavLink
            to={path}
            className={`text-white text-sm lg:text-base hover:text-indigo-300 transition duration-150 px-3 py-1 rounded-lg font-medium ${isActive ? 'text-red-400 font-bold' : ''
                }`}
        >
            {children}
        </NavLink>
    );
}
