import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import SinglePortfolio from "./SinglePortfolio";
import Image from "../../assets/work.jpeg";

export default function Portfolio() {
    return <section className="bg-[#2b1ec2] pb-15 md:pb-50">
        <Container>
            <SectionHeader title="Portfolio" content="I Served For More Than 1000 Customers" />

            <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 space-x-5 mt-8">
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={"https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-4.jpg"} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={"https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-5.jpg"} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={"https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-1.jpg"} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={"https://kits.focuxtheme.com/indev/wp-content/uploads/sites/3/2021/11/work-3.jpg"} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
                <SinglePortfolio image={Image} heading="Social App" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />

            </div>

        </Container>

    </section>
}