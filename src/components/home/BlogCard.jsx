import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post }) => (
    <div className="bg-gray-800 rounded-md transition duration-300 overflow-hidden text-left">
        <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
        <div className="p-6">
            <div className="flex text-xs text-gray-400 mb-3 space-x-4">
                <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-indigo-400" />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <User className="w-3 h-3 text-indigo-400" />
                    <span>{post.author}</span>
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 hover:text-indigo-400 transition duration-150 cursor-pointer">
                {post.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {post.excerpt}
            </p>
            <a href="#" className="flex items-center space-x-1 text-white duration-400 hover:text-indigo-100 font-medium text-sm hover:text-indigo-300">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
            </a>
        </div>
    </div>
);

export default BlogCard;