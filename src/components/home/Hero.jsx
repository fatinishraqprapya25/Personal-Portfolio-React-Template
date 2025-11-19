import { motion } from "framer-motion";
import Container from "../ui/Container";

export default function Hero() {
    return (
        <section className="text-center text-white py-20 md:py-32 poppins overflow-hidden">
            <Container>

                {/* Slow fade & slide-up */}
                <motion.h1
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}   // increased
                    className="text-[60px] leading-[30px] font-[100] mb-4 text-white/80"
                >
                    Hello!
                </motion.h1>

                {/* Slow scale and fade */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.4, delay: 0.3 }}  // increased
                    className="text-[60px] font-extrabold mb-4 tracking-tight mt-[-10px]"
                >
                    I'm Prapya
                </motion.h1>

                {/* Smooth, cinematic up-reveal */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, delay: 0.6 }}  // increased
                    className="text-[30px] font-light tracking-wide mb-8 text-white/80 mt-[-15px]"
                >
                    Full Stack Web Developer
                </motion.h2>

                {/* Slow fade-in text */}
                <motion.p
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.9 }}  // increased
                    className="mx-auto max-w-xl text-sm font-light leading-relaxed text-white/70 mt-[-15px]"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                    luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet.
                </motion.p>

            </Container>
        </section>
    );
}
