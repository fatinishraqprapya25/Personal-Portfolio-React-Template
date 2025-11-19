import { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import HeaderLink from "./home/HeaderLink";
import Button from "./ui/Buttons";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full poppins backdrop-blur-sm bg-black/50 border-b border-white/10 transition-all duration-300 px-5 rounded-xl">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">

                {/* Logo */}
                <div className="flex items-center space-x-2 cursor-pointer">
                    <Rocket className="w-7 h-7 text-indigo-400 transform rotate-45" />
                    <span className="text-xl font-extrabold text-white tracking-wider">Astro</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex justify-center space-x-6 lg:space-x-2">
                    <HeaderLink path="/">Home</HeaderLink>
                    <HeaderLink path="/about">About</HeaderLink>
                    <HeaderLink path="/services">Services</HeaderLink>
                    <HeaderLink path="/portfolio">Portfolio</HeaderLink>
                    <HeaderLink path="/blogs">Blogs</HeaderLink>
                </nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center space-x-3">
                    <div className="hidden md:block">
                        <Button primary>Download CV</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-white/10 rounded-b-xl px-6 py-4 space-y-4">

                    {/* Stack items vertically */}
                    <div className="flex flex-col space-y-3">
                        <HeaderLink path="/" className="block" onClick={() => setOpen(false)}>
                            Home
                        </HeaderLink>

                        <HeaderLink path="/about" className="block" onClick={() => setOpen(false)}>
                            About
                        </HeaderLink>

                        <HeaderLink path="/services" className="block" onClick={() => setOpen(false)}>
                            Services
                        </HeaderLink>

                        <HeaderLink path="/portfolio" className="block" onClick={() => setOpen(false)}>
                            Portfolio
                        </HeaderLink>

                        <HeaderLink path="/blogs" className="block" onClick={() => setOpen(false)}>
                            Blogs
                        </HeaderLink>

                        {/* Mobile CTA Button */}
                        <Button primary fullWidth>
                            Download CV
                        </Button>
                    </div>

                </div>
            </div>
        </header>
    );
}
