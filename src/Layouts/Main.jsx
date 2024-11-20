import { Outlet } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
<<<<<<< HEAD
=======
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
import Navbar from "../components/Shared/Navbar";
>>>>>>> b2e9578 (registration authprovider)
=======
>>>>>>> 2af016a (dashboard layout footer and navbar done)

const Main = () => {
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <Navbar />
<<<<<<< HEAD
            <Outlet />
            <Footer />
=======
=======
            <Navbar />
>>>>>>> b2e9578 (registration authprovider)
            <h2 className="text-2xl italic">I am main layout</h2>
            <Outlet />
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
            <Outlet />
            <Footer />
>>>>>>> 2af016a (dashboard layout footer and navbar done)
        </div>
    );
};

export default Main;