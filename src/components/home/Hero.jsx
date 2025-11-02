import Container from "../ui/Container";

export default function Hero() {
    return (
        <section className="text-center text-white py-20 md:py-32 poppins">
            <Container>
                <h1 className="text-[60px] leading-[30px] font-[100] mb-4 text-white/80">
                    Hello!
                </h1>

                <h1 className="text-[60px] font-extrabold mb-4 tracking-tight mt-[-10px]">
                    I'm Prapya
                </h1>

                <h2 className="text-[30px] font-light tracking-wide mb-8 text-white/80 mt-[-15px]">
                    Full Stack Web Developer
                </h2>

                <p className="mx-auto max-w-xl text-sm font-light leading-relaxed text-white/70 mt-[-15px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet.
                </p>

            </Container>
        </section>
    );
}