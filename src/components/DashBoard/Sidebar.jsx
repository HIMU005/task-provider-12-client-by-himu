import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useInfo from "../../Hooks/useInfo";
import LoadingSpinner from "../Shared/LoadingSpinner";
import AdminMenu from "./NavigationDash/Menu/AdminMenu";
import TaskCreatorMenu from "./NavigationDash/Menu/TaskCreatorMenu";
import WorkerMenu from "./NavigationDash/Menu/WorkerMenu";
import NavigationDash from "./NavigationDash/NavigationDash";

const Sidebar = () => {
  const { logOut, loading } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role, isLoading] = useInfo();

  const handleToggle = () => setActive(!isActive);

  if (isLoading || loading) return <LoadingSpinner />;

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">TaskLinker</Link>
          </div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive ? "-translate-x-full" : ""
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Desktop Logo */}
          <div className="w-full text-green-500 hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
            <Link to="/">TaskLinker</Link>
          </div>

          {/* Role-based Menus */}
          {role?.role === "worker" && <WorkerMenu />}
          {role?.role === "task-creator" && <TaskCreatorMenu />}
          {role?.role === "admin" && <AdminMenu />}
        </div>

        {/* Profile + Logout */}
        <div>
          <hr />
          <NavigationDash
            label="Profile"
            address="/dashboard/profile"
            icon={FcSettings}
          />

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
