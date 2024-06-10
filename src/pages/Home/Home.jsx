import { Helmet } from "react-helmet-async";
import Featured from "./Featured";
import Hero from "../../components/Home/Hero";
import HowItWork from "./HowItWork";
import TopEarner from "./TopEarner";
import Testimonial from "../../components/Home/Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Work Provider || Home  </title>
            </Helmet>
            <Hero />
            <Featured />
            <HowItWork />
            <TopEarner />
            <Testimonial />
        </div>
    );
};

export default Home;