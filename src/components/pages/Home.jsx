import Hero from "../home/Hero";
import bgImage from "../../assets/hero-bg.jpeg"
import Header from "../header";

export default function Home() {
    return (
        <>
            <main
                style={{ backgroundImage: `url(${bgImage})` }}
                className="relative bg-cover bg-center h-screen home-hero"
            >
                {/* background black overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <Header />

                {/* Hero Section */}
                <div className="relative z-10">
                    <Hero />
                </div>
            </main>
        </>
    );
}