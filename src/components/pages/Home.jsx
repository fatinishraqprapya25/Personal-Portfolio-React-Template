import Hero from "../home/Hero";
import bgImage from "../../assets/hero-bg.jpeg"
import Header from "../header";
import Container from "../ui/Container";
import Profile from "../home/Profile";
import Portfolio from "../home/Portfolio";
import Services from "../home/Services";

export default function Home() {
    return (
        <>
            <main
                style={{ backgroundImage: `url(${bgImage}) ` }}
                className="relative bg-cover bg-center md:min-h-screen home-hero pt-2 pb-20"
            >

                <div className="absolute inset-0 bg-black opacity-50 md:min-h-screen"></div>

                <Container>
                    <Header />
                    <div className="relative z-10">
                        <Hero />
                    </div>
                </Container>

            </main>

            <Profile />
            <Portfolio />
            <Services />
        </>
    );
}