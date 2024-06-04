import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserLogo from "./UserLogo";

const Navbar = () => {
    const { user } = useAuth();

    const links = <>
        {!user ? <>
            <li><NavLink to={'/login'}>Login</NavLink></li>
            <li><NavLink to={'/sign-up'}>SignUp</NavLink></li>
            <li><a href="https://youtu.be/3OOHC_UzrKA?si=r5BUiybMleW2UWhw" target="_blank">Watch Demo</a></li>
        </> :
            <>
                <li><NavLink to={'/dashBoard'}>DashBoard</NavLink></li>
            </>
        }
    </>



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">Task Provider</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <UserLogo />
        </div>
    );
};

export default Navbar;