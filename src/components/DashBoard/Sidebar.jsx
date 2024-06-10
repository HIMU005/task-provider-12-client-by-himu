import { useState } from "react"
import { Link } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import { GrLogout } from 'react-icons/gr'
import useInfo from "../../Hooks/useInfo"
import WorkerMenu from "./NavigationDash/Menu/WorkerMenu"
import TaskCreatorMenu from "./NavigationDash/Menu/TaskCreatorMenu"
import AdminMenu from "./NavigationDash/Menu/AdminMenu"
import LoadingSpinner from "../Shared/LoadingSpinner"
import { FcSettings } from "react-icons/fc"
import NavigationDash from "./NavigationDash/NavigationDash"
import { AiOutlineBars } from 'react-icons/ai'


const Sidebar = () => {
    const { logOut, loading } = useAuth()
    const [isActive, setActive] = useState(false)
    const [role, isLoading] = useInfo()
    const handleToggle = () => {
        setActive(!isActive)
    }

    if (isLoading || loading) return <LoadingSpinner />

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>
                            TaskProvider
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

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full text-green-500 hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                            <Link to='/'>
                                TaskLinker
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

                <div>
                    <hr />

                    {/* Profile Menu */}

                    <NavigationDash
                        label='Profile'
                        address='/dashboard/profile'
                        icon={FcSettings}
                    />

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