import { useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import HeaderLink from "./home/HeaderLink";
import Button from "./ui/Buttons";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full poppins backdrop-blur-sm bg-black/50 border-b border-white/10 transition-all duration-300 px-5 rounded-xl"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-6">

                {/* Logo animation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    whileHover={{ rotate: 10, scale: 1.05 }}
                    className="flex items-center space-x-2 cursor-pointer"
                >
                    <Rocket className="w-7 h-7 text-indigo-400 transform rotate-45" />
                    <span className="text-xl font-extrabold text-white tracking-wider">Astro</span>
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav
                    className="hidden md:flex justify-center space-x-6 lg:space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        staggerChildren: 0.12,
                        duration: 0.5
                    }}
                >
                    {["Home", "About", "Services", "Portfolio", "Blogs"].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="relative group"
                        >
                            <HeaderLink path={`/${item.toLowerCase()}`}>
                                {item}
                            </HeaderLink>

                            {/* Underline hover animation removed */}
                        </motion.div>
                    ))}
                </motion.nav>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center space-x-3">
                    {/* CTA (desktop only) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="hidden md:block"
                    >
                        <Button primary>Download CV</Button>
                    </motion.div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu Animation */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="border-t border-white/10 rounded-b-xl px-6 py-4">

                            {/* Mobile Links */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    hidden: { opacity: 0, y: -10 },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: { staggerChildren: 0.08 }
                                    }
                                }}
                                className="flex flex-col space-y-3"
                            >
                                {["Home", "About", "Services", "Portfolio", "Blogs"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: -10 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                    >
                                        <HeaderLink
                                            path={`/${item.toLowerCase()}`}
                                            className="block"
                                            onClick={() => setOpen(false)}
                                        >
                                            {item}
                                        </HeaderLink>
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: -10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <Button primary fullWidth>Download CV</Button>
                                </motion.div>

                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
