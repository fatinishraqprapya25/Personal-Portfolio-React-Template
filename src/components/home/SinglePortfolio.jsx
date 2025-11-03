import { Link } from "react-router-dom";

export default function SinglePortfolio({ heading, content, image }) {
    return (
        <div className="relative group overflow-hidden shadow-lg">
            <img
                src={image}
                alt="Work Example"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black bg-opacity-0 opacity-0 transition-all duration-900 
                        group-hover:bg-opacity-10 group-hover:opacity-70">
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center 
                        transform translate-y-full transition-transform duration-500
                        group-hover:translate-y-0">

                {/* Heading */}
                <h1 className="text-2xl font-extrabold mb-2">{heading}</h1>

                {/* Content */}
                <p className="text-sm mb-4 leading-tight">{content}</p>

                {/* Learn More Button */}
                <Link to="/" className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-sm transition-colors">
                    Learn More
                </Link>
            </div>
        </div>
    );
}