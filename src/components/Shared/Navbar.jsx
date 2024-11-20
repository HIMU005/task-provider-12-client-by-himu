<<<<<<< HEAD
<<<<<<< HEAD
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserLogo from "./UserLogo";
import img from '../../../public/taskcreator.jpeg'
<<<<<<< HEAD
const Navbar = () => {
    const { user } = useAuth();

    const links = <>
        {!user ? <>
            <li><NavLink className='btn' to={'/login'}>Login</NavLink></li>
            <li><NavLink className='btn' to={'/sign-up'}>SignUp</NavLink></li>
            <li><a href="https://youtu.be/3OOHC_UzrKA?si=r5BUiybMleW2UWhw" target="_blank">Watch Demo</a></li>
            <li><NavLink className='btn' to={'/about'}>About</NavLink></li>
        </> :
            <>
                <li><NavLink to={'/dashBoard'}>DashBoard</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
            </>
        }
    </>



    return (
        <div className="navbar bg-base-100 z-50">
=======
import { NavLink } from "react-router-dom";
=======
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserLogo from "./UserLogo";
>>>>>>> 2af016a (dashboard layout footer and navbar done)

=======
>>>>>>> c8b509d (change the logo and title)
const Navbar = () => {
    const { user } = useAuth();

    const links = <>
        {!user ? <>
            <li><NavLink className='btn' to={'/login'}>Login</NavLink></li>
            <li><NavLink className='btn' to={'/sign-up'}>SignUp</NavLink></li>
            <li><a href="https://youtu.be/3OOHC_UzrKA?si=r5BUiybMleW2UWhw" target="_blank">Watch Demo</a></li>
            <li><NavLink className='btn' to={'/about'}>About</NavLink></li>
        </> :
            <>
                <li><NavLink to={'/dashBoard'}>DashBoard</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
            </>
        }
    </>



    return (
<<<<<<< HEAD
        <div className="navbar bg-base-100">
>>>>>>> b2e9578 (registration authprovider)
=======
        <div className="navbar bg-base-100 z-50">
>>>>>>> b288b80 (fixed some z index)
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> b288b80 (fixed some z index)
                    <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                {/* <Link to={'/'} className="btn btn-ghost text-xl text-green-500">TaskLinker</Link> */}
                <Link to={'/'}>
                    <img className="h-10" src={img} alt="" />
                </Link>
=======
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <a className="btn btn-ghost text-xl">daisyUI</a>
>>>>>>> b2e9578 (registration authprovider)
=======
                <Link to={'/'} className="btn btn-ghost text-xl">Task Provider</Link>
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                <Link to={'/'} className="btn btn-ghost text-xl text-green-500">TaskLinker</Link>
>>>>>>> e0fd6cb (SET UP profile)
=======
                {/* <Link to={'/'} className="btn btn-ghost text-xl text-green-500">TaskLinker</Link> */}
                <Link to={'/'}>
                    <img className="h-10" src={img} alt="" />
                </Link>
>>>>>>> c8b509d (change the logo and title)
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD

            <UserLogo className="-z-50" />
=======
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
>>>>>>> b2e9578 (registration authprovider)
=======

<<<<<<< HEAD
            <UserLogo />
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
            <UserLogo className="-z-50" />
>>>>>>> b288b80 (fixed some z index)
        </div>
    );
};

export default Navbar;