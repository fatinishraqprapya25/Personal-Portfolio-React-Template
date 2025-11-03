import { Link } from "react-router-dom";
import profile from "../../assets/profile.jpg"
import Container from "../ui/Container";
import ProfileExperience from "./ProfileExperience";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function Profile() {
    const skills = [
        { name: "Python", level: "w-[90%]" },
        { name: "ReactJS", level: "w-[85%]" },
        { name: "Laravel", level: "w-[80%]" },
        { name: "Vue", level: "w-[95%]" },
    ];

    return (
        <section className="bg-[#2b1ec2] poppins text-white md:py-40 py-10 relative">
            <div className="h-50 w-[1px] bg-gray-300 hidden absolute left-[50%] top-[-16%] md:block"></div>
            <Container>
                <div className="md:flex justify-center items-center">

                    <div className="md:w-1/3 pr-10">
                        <div className="text-4xl font-bold leading-[40px] mb-6">
                            <h2>10 Years </h2>
                            <h2>Experience On</h2>
                            <h2>Web </h2>
                            <h2>Development.</h2>
                        </div>
                        <p className="text-sm pb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex justify-center relative z-10">
                        <img
                            src={profile}
                            alt="Profile of a Web Developer"
                            className="md:h-120 md:w-75  w-full h-auto object-cover object-top opacity-100"
                        />
                    </div>


                    <div className="md:w-1/3 md:pl-10 md:px-0 mt-10">
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-8">
                                <p className="font-semibold mb-2">{skill.name}</p>
                                {/* Skill Bar Container */}
                                <div className="w-full h-1 bg-white bg-opacity-30 relative">
                                    {/* Filled Progress Bar */}
                                    <div
                                        className={`absolute top-0 left-0 h-full bg-white transition-all duration-1000 ${skill.level}`}
                                        style={{ transition: 'width 1s ease-out' }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="md:flex md:flex-row flex flex-col-reverse md:mt-25">
                    {/* experience left */}
                    <div className="lg:w-1/2 pr-0 lg:pr-8 relative md:text-right text-left md:pr-8 md:mt-0 mt-10">

                        <ProfileExperience heading="2010 - 2014 ABC Company" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                        <ProfileExperience heading="2014 - 2016 X Software Company" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                        <ProfileExperience heading="2017 - Now Freelance" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                    </div>


                    <div className="md:w-1/2 pt-8 lg:pt-0 md:pl-10 border-t-2 md:border-t-0 md:border-l-2 border-white lg:py-20 flex items-center">

                        <div>
                            <h2 className="text-3xl font-semibold mb-3 mt-0">
                                <span className="mr-2">☐</span>My Work Experience
                            </h2>
                            <p className="text-gray-300 text-sm mt-0 pr-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                            <div className="flex space-x-2 mt-5">
                                <Link className="bg-gray-700 px-2 py-2 rounded-md" to="facebook.com">
                                    <Facebook size={17} className="text-sm text-white" />
                                </Link>
                                <Link className="bg-blue-600 px-2 py- rounded-sm flex justify-center items-center" to="facebook.com">
                                    <Twitter size={17} className=" text-white" />
                                </Link>
                                <Link className="bg-red-700 px-2 flex justify-center items-center rounded-md" to="facebook.com">
                                    <Youtube size={17} className=" text-white" />
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>

            </Container>
        </section>
    );
}