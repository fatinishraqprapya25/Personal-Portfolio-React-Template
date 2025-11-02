import { Rocket, LogIn, UserPlus } from 'lucide-react';

import HeaderLink from './home/HeaderLink';

const HeaderButton = ({ children, primary = false }) => (
    <button
        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md whitespace-nowrap transform hover:scale-[1.03] ${primary
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
            }`}
    >
        {children}
    </button>
);

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-black/30 border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Rocket className="w-7 h-7 text-indigo-400 transform rotate-45" />
                    <span className="text-xl font-extrabold text-white tracking-wider">Astro</span>
                </div>

                <nav className="hidden md:flex justify-center space-x-6 lg:space-x-2">

                    <HeaderLink path="/home" isActive={true}>Home</HeaderLink>
                    <HeaderLink path="/about">About</HeaderLink>
                    <HeaderLink path="/services" >Services</HeaderLink>
                    <HeaderLink path="/portfolio">Portfolio</HeaderLink>
                    <HeaderLink path="/blogs">Blogs</HeaderLink>

                </nav>

                <div className="flex items-center space-x-3">
                    <HeaderButton>
                        <LogIn className="inline w-4 h-4 mr-1" /> Login
                    </HeaderButton>
                    <HeaderButton primary>
                        <UserPlus className="inline w-4 h-4 mr-1" /> Sign Up
                    </HeaderButton>
                </div>
            </div>
        </header >
    );
}
