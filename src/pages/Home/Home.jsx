<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import Featured from "./Featured";
=======
import { Helmet } from "react-helmet-async";
<<<<<<< HEAD
import Featured from "../../components/Home/Featured";
>>>>>>> d8d0a65 (implement helmet of dynamic title)
=======
import Featured from "./Featured";
>>>>>>> 6e21f58 (main home page finished)
import Hero from "../../components/Home/Hero";
import HowItWork from "./HowItWork";
import TopEarner from "./TopEarner";
import Testimonial from "../../components/Home/Testimonial";
<<<<<<< HEAD
=======
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
import Hero from "../../components/Home/Hero";
>>>>>>> 02aa898 (hero section done)
=======
>>>>>>> 6e21f58 (main home page finished)

const Home = () => {
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <Helmet>
                <title> Work Provider || Home  </title>
            </Helmet>
            <Hero className="-z-50" />
            <Featured />
            <HowItWork />
            <TopEarner />
            <Testimonial />
=======
            I am home
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
            <Hero />
>>>>>>> 02aa898 (hero section done)
=======
            <Helmet>
                <title> Work Provider || Home  </title>
            </Helmet>
            <Hero className="-z-50" />
            <Featured />
<<<<<<< HEAD
            ok

>>>>>>> d8d0a65 (implement helmet of dynamic title)
=======
            <HowItWork />
            <TopEarner />
            <Testimonial />
>>>>>>> 6e21f58 (main home page finished)
        </div>
    );
};

export default Home;