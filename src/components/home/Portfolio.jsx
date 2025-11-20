import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import SinglePortfolio from "./SinglePortfolio";
import Image from "../../assets/work.jpeg";

export default function Portfolio() {

    const sectionRef = useRef(null);
    const headerControls = useAnimation();

    // Start header animation when section is visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    headerControls.start({
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.2, ease: "easeOut" }
                    });
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const portfolioItems = [
        { image: Image, heading: "Social App", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        { image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-4.jpg", heading: "Social App", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        { image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-5.jpg", heading: "Social App", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        { image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-1.jpg", heading: "Social App", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        { image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-3.jpg", heading: "Social App", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
        { image: Image, heading: "Social App", content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit." },
    ];

    return (
        <section className="bg-[#2b1ec2] pb-15 md:pb-50" ref={sectionRef}>
            <Container>

                {/* Header Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={headerControls}
                >
                    <SectionHeader
                        title="Portfolio"
                        content="I Served For More Than 1000 Customers"
                    />
                </motion.div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                    {portfolioItems.map((item, i) => (
                        <AnimatedCard key={i}>
                            <SinglePortfolio
                                image={item.image}
                                heading={item.heading}
                                content={item.content}
                            />
                        </AnimatedCard>
                    ))}

                </div>

            </Container>
        </section>
    );
}

/* -------------------------
   CARD COMPONENT WITH ITS OWN SCROLL ANIMATION
-------------------------- */

function AnimatedCard({ children }) {
    const ref = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    controls.start({
                        opacity: 1,
                        x: 0,
                        transition: { duration: 1, ease: "easeOut" }
                    });
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 60 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
}
