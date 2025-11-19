import { Link } from "react-router-dom";

export default function SinglePortfolio({ heading, content, image, linkTo = "/" }) {
    return (
        <div className="relative group overflow-hidden bg-white rounded-md shadow-xl transition-all duration-300 hover:shadow-2xl">

            <div className="h-64 sm:h-80 w-full overflow-hidden">
                <img
                    src={image}
                    alt={heading ? `${heading} Example` : "Work Example"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Fixed Overlay (use modern syntax for transparency) */}
            <div className="absolute inset-0 bg-gray-900/0 transition-all duration-500 group-hover:bg-gray-900/60 z-10"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6 text-center 
                            opacity-0 translate-y-4 transition-all duration-500 ease-in-out
                            group-hover:opacity-100 group-hover:translate-y-0">
                <h1 className="text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
                    {heading}
                </h1>

                <p className="text-sm text-white/90 mb-6 leading-relaxed hidden sm:block">
                    {content}
                </p>

                <Link
                    to={linkTo}
                    className="px-6 py-2 text-sm font-medium bg-white text-gray-800 rounded-full 
                               hover:bg-gray-100 transition-all duration-300 shadow-md uppercase tracking-wider"
                >
                    View Project
                </Link>
            </div>
        </div>
    );
}
