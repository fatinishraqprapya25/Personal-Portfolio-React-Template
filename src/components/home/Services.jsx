import { Smartphone, Globe, PenTool, Monitor } from 'lucide-react';
import image from "../../assets/service-bg.jpeg";
import Container from '../ui/Container';
import ServiceCard from './ServiceCard';
import Button from '../ui/Buttons';

const servicesData = [
    {
        Icon: Smartphone,
        title: "App Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
        Icon: Globe,
        title: "Web APP",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
        Icon: PenTool,
        title: "WordPress Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
        Icon: Monitor,
        title: "Front-end Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
];


export default function Services() {
    return (
        <section
            className="relative py-24 md:py-32 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute inset-0 bg-indigo-900/55"></div>

            <Container>
                <div className="relative z-10 text-white text-center px-4">
                    <h2 className="text-5xl md:text-6xl font-extrabold mb-3">
                        My Services
                    </h2>
                    <p className="text-xl md:text-2xl font-light mb-16 opacity-90">
                        I'm Available For Freelance Work
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-left max-w-7xl mx-auto">
                        {servicesData.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>

                    <div className="mt-20">
                        <button className="px-8 py-3 bg-indigo-700 hover:bg-indigo-800 transition duration-300 text-lg font-medium rounded-md cursor-pointer shadow-xl shadow-indigo-700/50">
                            Hire Me!
                        </button>

                    </div>
                </div>
            </Container>
        </section>
    );
}
