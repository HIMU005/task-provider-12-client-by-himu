<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> b2e9578 (registration authprovider)
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> ab1a43e (login and registration done)
import { FcGoogle } from 'react-icons/fc'
import { imageUpload } from "../../api/imageUpload";
import toast from 'react-hot-toast'
import useAuth from "../../Hooks/useAuth";
<<<<<<< HEAD
<<<<<<< HEAD
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useForm } from "react-hook-form";
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
import useAxiosCommon from "../../Hooks/useAxiosCommon";
>>>>>>> ab1a43e (login and registration done)
=======

>>>>>>> dcbf55b (update readme.me and update register functinality)
=======
import { Helmet } from "react-helmet-async";
>>>>>>> d8d0a65 (implement helmet of dynamic title)


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {
        loading,
        createUser,
        updateUserProfile,
        setLoading,
        GoogleLogin,
    } = useAuth();
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();

    const onSubmit = async data => {
        const role = data.role;
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image[0];
        let coin;
        if (role === 'worker') {
            coin = 10;
        }
        else {
            coin = 50;
        }


        try {
            const photo = await imageUpload(image);
            await createUser(email, password);
            await updateUserProfile(name, photo);
            const userInfo = { displayName: name, email, photoURL: photo, role, coin }
            const { data } = await axiosCommon.post('/users', userInfo);
            if (data.insertedId) {
                toast.success("Your information save in out database")
                reset();
                setLoading(false)
            }
            navigate('/');
        } catch (err) {
            toast.error(err.message)
            setLoading(false)
        }
    }


    const handleGoogleSignIn = async () => {
        try {
            const result = await GoogleLogin();
            const { data } = await axiosCommon.get(`/user/${result?.user?.email}`)
            console.log("data", data);
            if (!data) {
                const userInfo = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    role: 'worker',
                    coin: 10,
                }
                const userResponse = await axiosCommon.post('/users', userInfo);
                console.log(userResponse);
                if (userResponse.insertedId) {
                    toast.success("Your information save in out database")
                }
                navigate('/');
                setLoading(false)
            }

        } catch (err) {
            console.log(err);
            toast.error(err.message)
            setLoading(false)
        }
    }




    return (
        <div>
            <Helmet>
                <title> Work Provider || Register  </title>
            </Helmet>            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <a className="block text-blue-600" href="#">
                                <span className="sr-only">Home</span>
                                <svg
                                    className="h-8 sm:h-10"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>

                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Squid 🦑
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">

                                description
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">

                                {/* name  */}
                                <div className="col-span-6 ">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        // name="name"
                                        {...register("name", { required: true })} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.name && <span className="text-red-600">Name is required</span>}

                                </div>

                                {/* email  */}
                                <div className="col-span-6 ">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        // name="email"
                                        {...register("email", { required: true })}
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.email && <span className="text-red-600">Name is required</span>}
                                </div>


                                {/* password */}
                                <div className="col-span-6 ">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        placeholder="******"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                                {/* upload image  */}
                                <div className="col-span-6">
                                    <label htmlFor='image' className='block mb-2 text-sm'>
                                        Select Image:
                                    </label>
                                    <input className="border-primary border-2 px-2 py-3"
                                        // required
                                        type='file'
                                        id='image'
                                        // name='image'
                                        accept='image/*'
                                        {...register("image", { required: true })}
                                    />
                                    {errors.image && <span className="text-red-600">Name is required</span>}

                                </div>


                                {/* select role  */}

                                <div className="col-span-6 ">
                                    <label htmlFor="Role" className="block text-sm font-medium text-gray-700">
                                        Choose your role
                                    </label>

                                    <select {...register("role", { required: true })} id="role">
                                        <option value="worker">Worker</option>
                                        <option value="task-creator">Task Creator</option>
                                    </select>
                                </div>


                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">

                                    <input
                                        type="submit"
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        value="Create an account" />

                                </div>
                            </form>
                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to={'/login'} href="#" className="text-gray-700 underline">Log in</Link>.
                            </p>

                            {/* google login here  */}
                            <div className='flex items-center pt-4 space-x-1'>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                <p className='px-3 text-sm dark:text-gray-400'>
                                    Signup with social accounts
                                </p>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            </div>
                            <button
                                disabled={loading}
                                onClick={handleGoogleSignIn}
                                className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                            >
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </button>
                        </div>
                    </main >
                </div >
            </section >
        </div >
=======
=======

>>>>>>> b2e9578 (registration authprovider)
const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {
        loading,
        createUser,
        updateUserProfile,
        setLoading,
        GoogleLogin,
    } = useAuth();
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();

    const onSubmit = async data => {
        setLoading(true);
        const role = data.role;
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const image = data.image[0];
        let coin;
        if (role === 'worker') {
            coin = 10;
        }
        else {
            coin = 50;
        }


        try {
            const photo = await imageUpload(image);
            await createUser(email, password);
            await updateUserProfile(name, photo);
            const userInfo = { displayName: name, email, photoURL: photo, role, coin }
            const { data } = await axiosCommon.post('/users', userInfo);
            if (data.insertedId) {
                toast.success("Your information save in out database")
                reset();
            }
            navigate('/');
        } catch (err) {
            toast.error(err.message)
        }
    }


    const handleGoogleSignIn = async () => {
        try {
            const result = await GoogleLogin();
            const { data } = await axiosCommon.get(`/user/${result?.user?.email}`)
            console.log("data", data);
            if (!data) {
                const userInfo = {
                    displayName: result.user.displayName,
                    email: result.user.email,
                    photoURL: result.user.photoURL,
                    role: 'worker',
                    coin: 10,
                }
                const userResponse = await axiosCommon.post('/users', userInfo);
                console.log(userResponse);
                if (userResponse.insertedId) {
                    toast.success("Your information save in out database")
                }
                navigate('/');
            }

        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }




    return (
        <div>
            <section className="bg-white">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </aside>

<<<<<<< HEAD
        </div>
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <a className="block text-blue-600" href="#">
                                <span className="sr-only">Home</span>
                                <svg
                                    className="h-8 sm:h-10"
                                    viewBox="0 0 28 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>

                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Welcome to Squid 🦑
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">

                                description
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">

                                {/* name  */}
                                <div className="col-span-6 ">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        // name="name"
                                        {...register("name", { required: true })} className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.name && <span className="text-red-600">Name is required</span>}

                                </div>

                                {/* email  */}
                                <div className="col-span-6 ">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        // name="email"
                                        {...register("email", { required: true })}
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.email && <span className="text-red-600">Name is required</span>}
                                </div>


                                {/* password */}
                                <div className="col-span-6 ">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        placeholder="******"
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                                {/* upload image  */}
                                <div className="col-span-6">
                                    <label htmlFor='image' className='block mb-2 text-sm'>
                                        Select Image:
                                    </label>
                                    <input className="border-primary border-2 px-2 py-3"
                                        // required
                                        type='file'
                                        id='image'
                                        // name='image'
                                        accept='image/*'
                                        {...register("image", { required: true })}
                                    />
                                    {errors.image && <span className="text-red-600">Name is required</span>}

                                </div>


                                {/* select role  */}

                                <div className="col-span-6 ">
                                    <label htmlFor="Role" className="block text-sm font-medium text-gray-700">
                                        Choose your role
                                    </label>

                                    <select {...register("role", { required: true })} id="role">
                                        <option value="worker">Worker</option>
                                        <option value="task-creator">Task Creator</option>
                                    </select>
                                </div>


                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">

                                    <input
                                        type="submit"
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                        value="Create an account" />

                                </div>
                            </form>
                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Already have an account?
                                <Link to={'/login'} href="#" className="text-gray-700 underline">Log in</Link>.
                            </p>

                            {/* google login here  */}
                            <div className='flex items-center pt-4 space-x-1'>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                <p className='px-3 text-sm dark:text-gray-400'>
                                    Signup with social accounts
                                </p>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            </div>
                            <button
                                disabled={loading}
                                onClick={handleGoogleSignIn}
                                className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
                            >
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </button>
                        </div>
                    </main >
                </div >
            </section >
        </div >
>>>>>>> b2e9578 (registration authprovider)
    );
};

export default Register;