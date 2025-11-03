import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import SinglePortfolio from "./SinglePortfolio";
import Image from "../../assets/work.jpeg";

export default function Portfolio() {
    return <section className="bg-[#2b1ec2]">
        <Container>
            <SectionHeader title="Portfolio" content="I Served For More Than 1000 Customers" />

            <div className="grid grid-cols-3 space-y-4 space-x-5 mt-8">
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />

            </div>

        </Container>
        
    </section>
}