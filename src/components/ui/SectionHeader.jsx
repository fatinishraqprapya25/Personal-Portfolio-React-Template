export default function SectionHeader({ title, content }) {
    return (
        <div className="text-white text-center mx-auto max-w-[450px]">
            <h1 className="text-5xl font-extrabold">{title}</h1>
            <p className="text-md mt-2 font-medium">{content}</p>
        </div>
    );
}
