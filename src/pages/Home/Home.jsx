import { Helmet } from "react-helmet-async";
import Featured from "../../components/Home/Featured";
import Hero from "../../components/Home/Hero";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Work Provider || Home  </title>
            </Helmet>
            <Hero />
            <Featured />
            ok

        </div>
    );
};

export default Home;