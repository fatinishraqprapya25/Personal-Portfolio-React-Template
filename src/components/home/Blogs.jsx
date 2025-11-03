import Container from '../ui/Container';
import Button from '../ui/Buttons';
import SectionHeader from '../ui/SectionHeader';
import BlogCard from './BlogCard';

const blogData = [
    {
        title: "Mastering React Hooks",
        excerpt: "Dive deep into custom hooks and understand how to manage complex state logic cleanly and efficiently in modern React applications.",
        date: "Oct 25, 2024",
        author: "Alice Johnson",
        image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-6.jpg"
    },
    {
        title: "The Power of Tailwind CSS",
        excerpt: "A utility-first approach drastically speeds up development. Learn why Tailwind is replacing traditional CSS frameworks for rapid UI creation.",
        date: "Oct 18, 2024",
        author: "Bob Smith",
        image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-5.jpg"
    },
    {
        title: "Future of Web Assembly",
        excerpt: "WebAssembly is pushing browser performance limits. Explore how it's used today and its potential impact on next-generation web applications.",
        date: "Oct 10, 2024",
        author: "Charlie Brown",
        image: "https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-2.jpg"
    },
];

export default function Blogs() {
    return (
        <section
            className="relative py-24 md:py-32 bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-indigo-950"></div>

            <Container>
                <div className="relative z-10 text-white text-center px-4">
                    <SectionHeader title="Featured Blogs" content="Thoughts, tutorials, and insights on development." />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-15">
                        {blogData.map((post, index) => (
                            <BlogCard key={index} post={post} />
                        ))}
                    </div>

                    <div className="mt-15">
                        <Button>View All Posts</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
