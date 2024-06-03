import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h2 className="text-2xl italic">I am main layout</h2>
            <Outlet />
        </div>
    );
};

export default Main;