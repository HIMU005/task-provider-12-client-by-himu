import useAuth from "../../Hooks/useAuth";
import useInfo from "../../Hooks/useInfo";

const UserLogo = () => {
    const { user, logOut } = useAuth();
    const [role] = useInfo();
    if (!user) return;
    const handleSignOut = () => {
        logOut();
    }
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="navbar-end ">
=======
        <div className="navbar-end">
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
        <div className="navbar-end ">
>>>>>>> b288b80 (fixed some z index)
            {user &&
                <div className="flex gap-3 justify-end">
                    {/* dynamic coin */}
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>                                        <span className="badge badge-sm indicator-item">{role.coin}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="dropdown dropdown-end ">
=======
                    <div className="dropdown dropdown-end">
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                    <div className="dropdown dropdown-end ">
>>>>>>> b288b80 (fixed some z index)
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div title={user?.displayName} className="w-10 rounded-full">
                                <img alt={user?.email} src={user?.photoURL} />
                            </div>
                        </div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <li className="btn -z-50" onClick={handleSignOut}>Logout</li>
=======
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <li className="btn" onClick={handleSignOut}>Logout</li>
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                        <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <li className="btn -z-50" onClick={handleSignOut}>Logout</li>
>>>>>>> b288b80 (fixed some z index)
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default UserLogo;