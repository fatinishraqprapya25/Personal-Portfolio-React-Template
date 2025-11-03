import profile from "../../assets/profile.jpg"
import Container from "../ui/Container";
import ProfileExperience from "./ProfileExperience";

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

                    <div className="md:w-1/3 pr-10 md:px-0 px-10">
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

                    <div className="md:w-1/3 flex justify-center relative z-10 md:px-0 px-10">
                        <img
                            src={profile}
                            alt="Profile of a Web Developer"
                            className="md:h-120 md:w-75  w-full h-auto object-cover object-top opacity-100"
                        />
                    </div>


                    <div className="md:w-1/3 md:pl-10 px-10 md:px-0 mt-10">
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

                <div className="flex mt-25">

                    <div className="lg:w-1/2 pr-0 lg:pr-12 relative text-right">

                        <ProfileExperience heading="2010 - 2014 ABC Company" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                        <ProfileExperience heading="2014 - 2016 X Software Company" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />

                        <ProfileExperience heading="2017 - Now Freelance" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
                    </div>

                    <div className="lg:w-1/2 pt-8 lg:pt-0 lg:pl-12 border-t-2 lg:border-t-0 lg:border-l-2 border-white">
                        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 mt-0">
                            <span className="mr-2">☐</span>My Work Experience
                        </h2>
                        <p className="text-gray-300 text-sm mt-2 pr-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                        <div className="flex space-x-3">
                            <a href="#" className="bg-blue-600 p-2 rounded-md hover:opacity-80 transition">
                                <span className="text-white text-lg font-bold">f</span>
                            </a>
                            <a href="#" className="bg-sky-400 p-2 rounded-md hover:opacity-80 transition">
                                <span className="text-white text-lg font-bold">t</span>
                            </a>
                            <a href="#" className="bg-red-600 p-2 rounded-md hover:opacity-80 transition">
                                <span className="text-white text-lg font-bold">▶</span>
                            </a>
                        </div>
                    </div>

                </div>

            </Container>
        </section>
    );
}