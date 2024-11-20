import { useState } from "react"
import { Link } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import { GrLogout } from 'react-icons/gr'
import useInfo from "../../Hooks/useInfo"
<<<<<<< HEAD
<<<<<<< HEAD
import WorkerMenu from "./NavigationDash/Menu/WorkerMenu"
import TaskCreatorMenu from "./NavigationDash/Menu/TaskCreatorMenu"
import AdminMenu from "./NavigationDash/Menu/AdminMenu"
import LoadingSpinner from "../Shared/LoadingSpinner"
import { FcSettings } from "react-icons/fc"
import NavigationDash from "./NavigationDash/NavigationDash"
import { AiOutlineBars } from 'react-icons/ai'

<<<<<<< HEAD

const Sidebar = () => {
    const { logOut, loading } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role, isLoading] = useInfo()
    const handleToggle = () => {
        setActive(!isActive)
    }

    if (isLoading || loading) return <LoadingSpinner />

=======
=======
import WorkerMenu from "./NavigationDash/Menu/WorkerMenu"
import TaskCreatorMenu from "./NavigationDash/Menu/TaskCreatorMenu"
import AdminMenu from "./NavigationDash/Menu/AdminMenu"
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
>>>>>>> e0fd6cb (SET UP profile)

const Sidebar = () => {
    const { logOut, loading } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role, isLoading] = useInfo()
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(role, isLoading)
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
    const handleToggle = () => {
        setActive(!isActive)
    }

    if (isLoading || loading) return <LoadingSpinner />

>>>>>>> e0fd6cb (SET UP profile)
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
<<<<<<< HEAD
<<<<<<< HEAD
                            TaskProvider
=======
                            TaskProvider small
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                            TaskProvider
>>>>>>> c8b509d (change the logo and title)
                            {/* <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/4ZXzmq5/logo.png'
                                alt='logo'
                                width='100'
                                height='100'
                            /> */}
                        </Link>
                    </div>
                </div>

<<<<<<< HEAD
<<<<<<< HEAD
                <button
=======
                {/* <button
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                <button
>>>>>>> e0fd6cb (SET UP profile)
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
<<<<<<< HEAD
<<<<<<< HEAD
                </button>
=======
                </button> */}
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                </button>
>>>>>>> e0fd6cb (SET UP profile)
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
<<<<<<< HEAD
<<<<<<< HEAD
                        <div className='w-full text-green-500 hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                TaskLinker
=======
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                TaskProvider big
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
                        <div className='w-full text-green-500 hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                TaskLinker
>>>>>>> e0fd6cb (SET UP profile)
                                {/* <img
                                    // className='hidden md:block'
                                    src='https://i.ibb.co/4ZXzmq5/logo.png'
                                    alt='logo'
                                    width='100'
                                    height='100'
                                /> */}
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 087dfad (set up all home route and dashboard route)

                </div>

                {
                    role.role === 'worker' && <WorkerMenu />
                }
                {
                    role.role === 'task-creator' && <TaskCreatorMenu />
                }
                {
                    role.role === 'admin' && <AdminMenu />
                }

<<<<<<< HEAD
=======
                </div>

>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
                <div>
                    <hr />

                    {/* Profile Menu */}
<<<<<<< HEAD
<<<<<<< HEAD

                    <NavigationDash
                        label='Profile'
                        address='/dashboard/profile'
                        icon={FcSettings}
                    />
=======
                    Profile
                    {/* <MenuItem
                        label='Profile'
                        address='/dashboard/profile'
                        icon={FcSettings}
                    /> */}
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======

                    <NavigationDash
                        label='Profile'
                        address='/dashboard/profile'
                        icon={FcSettings}
                    />
>>>>>>> e0fd6cb (SET UP profile)

                    <button
                        onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar;