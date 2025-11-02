import profile from "../../assets/profile.jpg"
import Container from "../ui/Container";

export default function Profile() {
    // Defines the skill data with a value for the bar width (e.g., 90% for Python)
    const skills = [
        { name: "Python", level: "w-[90%]" },
        { name: "ReactJS", level: "w-[85%]" }, // Renamed from JavaScript/React/Node JS to match image
        { name: "Laravel", level: "w-[80%]" },
        { name: "Vue", level: "w-[95%]" },
    ];

    return (
        <section className="bg-[#2b1ec2] poppins text-white py-40">
            <Container>
                <div className="flex justify-center items-center">

                    <div className="w-1/3 pr-10">
                        <div className="text-4xl font-bold leading-[40px] mb-6">
                            <h2>10 Years </h2>
                            <h2>Experience On</h2>
                            <h2>Web </h2>
                            <h2>Development.</h2>
                        </div>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>

                    <div className="w-1/3 flex justify-center relative z-10">
                        <img
                            src={profile}
                            alt="Profile of a Web Developer"
                            className="h-120 w-75 object-cover object-top opacity-100"
                        />
                    </div>


                    <div className="w-1/3 pl-10">
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
            </Container>
        </section>
    );
}