import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar />
            <h2 className="text-2xl italic">I am main layout</h2>
            <Outlet />
        </div>
    );
};

export default Main;