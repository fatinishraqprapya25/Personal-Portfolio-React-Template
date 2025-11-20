import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import profile from "../../assets/profile.jpg";
import Container from "../ui/Container";
import ProfileExperience from "./ProfileExperience";
import { Facebook, Twitter, Youtube } from "lucide-react";
import { motion, useMotionValue, animate, useInView } from "framer-motion";

// Count Up Component
const AnimatedCount = ({ finalValue, duration, delay, start }) => {
    const count = useMotionValue(0);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!start) return; // Only animate after parent is visible

        const timeout = setTimeout(() => {
            animate(count, finalValue, {
                duration,
                ease: "easeOut",
                onUpdate: (v) => setDisplayValue(Math.round(v)),
            });
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [start, finalValue, duration, delay]);

    return <motion.span>{displayValue}</motion.span>;
};

export default function Profile() {
    const skills = [
        { name: "Python", level: 90 },
        { name: "ReactJS", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Vue", level: 95 },
    ];

    const animationDuration = 2.5;
    const staggerDelay = 0.4;

    // Parent ref for entire skills block
    const skillsRef = useRef(null);
    const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });

    return (
        <section className="bg-[#2b1ec2] poppins text-white md:py-40 pt-10 relative">
            <div className="h-50 w-[1px] bg-gray-300 hidden absolute left-[50%] top-[-12%] md:block"></div>

            <Container>
                <div className="md:flex justify-center items-center">

                    {/* LEFT TEXT */}
                    <motion.div
                        className="md:w-1/3 pr-10"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <div className="text-4xl font-bold leading-[40px] mb-6">
                            <h2>10 Years</h2>
                            <h2>Experience On</h2>
                            <h2>Web</h2>
                            <h2>Development.</h2>
                        </div>
                        <p className="text-sm pb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </motion.div>

                    {/* PROFILE IMAGE */}
                    <motion.div
                        className="md:w-1/3 flex justify-center relative z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 2, ease: "easeOut" }}
                    >
                        <img
                            src={profile}
                            alt="Profile"
                            className="md:h-120 md:w-75 w-full h-auto object-cover object-top"
                        />
                    </motion.div>

                    {/* SKILLS SECTION */}
                    <motion.div
                        ref={skillsRef}
                        className="md:w-1/3 md:pl-10 md:px-0 mt-10"
                        initial={{ opacity: 0, x: 40 }}  // SLIDE IN FROM RIGHT
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            staggerChildren: staggerDelay,
                            delayChildren: 0.5,
                        }}
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={skillsInView ? { opacity: 1 } : {}}
                                transition={{ duration: 1.2 }}
                                className="mb-4"
                            >
                                <div className="flex justify-between items-center mb-0">
                                    <p className="font-semibold">{skill.name}</p>

                                    <span className="text-xs font-bold">
                                        <AnimatedCount
                                            finalValue={skill.level}
                                            duration={animationDuration}
                                            delay={0.5 + index * staggerDelay}
                                            start={skillsInView} // COUNTER STARTS HERE
                                        />
                                        %
                                    </span>
                                </div>

                                {/* SKILL BAR */}
                                <motion.div
                                    className="h-[4px] bg-white mt-2 rounded"
                                    initial={{ width: 0 }}
                                    animate={
                                        skillsInView
                                            ? { width: `${skill.level}%` }
                                            : { width: 0 }
                                    }
                                    transition={{
                                        duration: animationDuration,
                                        ease: "easeOut",
                                        delay: 0.5 + index * staggerDelay,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* EXPERIENCE SECTION */}
                <div className="md:flex md:flex-row flex flex-col-reverse md:mt-25">

                    <motion.div
                        className="lg:w-1/2 pr-0 lg:pr-8 relative md:text-right text-left md:pr-8 md:mt-0 mt-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <ProfileExperience
                            heading="2010 - 2014 ABC Company"
                            content="Lorem ipsum dolor sit amet."
                        />
                        <ProfileExperience
                            heading="2014 - 2016 X Software Company"
                            content="Lorem ipsum dolor sit amet."
                        />
                        <ProfileExperience
                            heading="2017 - Now Freelance"
                            content="Lorem ipsum dolor sit amet."
                        />
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 pt-8 lg:pt-0 md:pl-10 border-t-2 md:border-t-0 md:border-l-2 border-white lg:py-20 flex items-center"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <div>
                            <h2 className="text-3xl font-semibold mb-3 md:mb-0">
                                <span className="mr-2">☐</span>My Work Experience
                            </h2>

                            <p className="text-gray-300 text-sm pr-7">
                                Lorem ipsum dolor sit amet.
                            </p>

                            <div className="flex space-x-2 mt-5">
                                <Link className="bg-gray-700 px-2 py-2 rounded-md" to="https://facebook.com" target="_blank">
                                    <Facebook size={17} />
                                </Link>
                                <Link className="bg-blue-600 px-2 py-2 rounded-sm" to="https://twitter.com" target="_blank">
                                    <Twitter size={17} />
                                </Link>
                                <Link className="bg-red-700 px-2 rounded-md" to="https://youtube.com" target="_blank">
                                    <Youtube size={17} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
