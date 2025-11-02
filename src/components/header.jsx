import { Rocket } from 'lucide-react';
import HeaderLink from './home/HeaderLink';
import Button from './ui/Buttons';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full poppins backdrop-blur-sm bg-black/50 border-b border-white/10 transition-all duration-300 px-5 rounded-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Rocket className="w-7 h-7 text-indigo-400 transform rotate-45" />
                    <span className="text-xl font-extrabold text-white tracking-wider">Astro</span>
                </div>

                <nav className="hidden md:flex justify-center space-x-6 lg:space-x-2">

                    <HeaderLink path="/">Home</HeaderLink>
                    <HeaderLink path="/about">About</HeaderLink>
                    <HeaderLink path="/services" >Services</HeaderLink>
                    <HeaderLink path="/portfolio">Portfolio</HeaderLink>
                    <HeaderLink path="/blogs">Blogs</HeaderLink>

                </nav>

                <div className="flex items-center space-x-3">
                    <Button primary>
                        Download CV
                    </Button>
                </div>
            </div>
        </header >
    );
}
