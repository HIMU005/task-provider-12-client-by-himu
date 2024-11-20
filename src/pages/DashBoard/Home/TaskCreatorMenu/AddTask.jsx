<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 47af664 (add task part done some part left)
import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import toast from "react-hot-toast";
import { imageUpload } from "../../../../api/imageUpload";
import useAuth from "../../../../Hooks/useAuth";
import useInfo from "../../../../Hooks/useInfo";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
import { Helmet } from "react-helmet-async";



const AddTask = () => {
    const { user } = useAuth();
    const [role, , refetch] = useInfo();
<<<<<<< HEAD
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date())
    const axiosSecure = useAxiosSecure();


    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const amount = parseInt(form.amount.value);
        const taskNumber = parseInt(form.taskNumber.value);
        if (role.coin < amount * taskNumber) {
            toast.error("You don't have sufficient coin to create a task!!! You should buy some coin.");
            navigate('/dashboard/purchase-coin')
            return;
        }
        const taskName = form.taskName.value;
        const completionDate = startDate.toLocaleDateString();
        const subInfo = form.subInfo.value;
        const image = form.image.files[0];
        const taskDetails = form.taskDetails.value;

        try {
            const taskImage = await imageUpload(image);
            const taskData = {
                taskName, taskNumber, amount, completionDate, subInfo, taskDetails, taskImage,
                taskProvider: {
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                }
            }
            console.log(taskData);
            const { data } = await axiosSecure.post('/tasks', taskData);
            if (data.insertedId) {
                const newCoin = role?.coin - (taskNumber * amount);
                const update = await axiosSecure.patch(`user/${user?.email}`, { newCoin });
                console.log(update);
                if (update.data.modifiedCount) {
                    toast.success("Your task add into our server");
                    refetch();
                    navigate('/dashboard/my-task');
                }
            }


        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }


    }

    return (
        <section className="bg-gray-100">
            <Helmet>
                <title> Work Provider || Dashboard | Add task  </title>
            </Helmet>            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                {/* <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5"> */}

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Name </label>
                                <input
                                    name="taskName"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Quantity </label>
                                <input
                                    name="taskNumber"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="number"
                                    id="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Payable amount </label>
                                <input
                                    name="amount"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="number"
                                    id="name"
                                    required
                                />
                            </div>


                            <div className='flex flex-col gap-2 '>
                                <label className='block text-sm font-medium text-gray-700"'>Deadline</label>

                                {/* Date Picker Input Field */}
                                <DatePicker
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Submission Information  </label>
                                <input
                                    name="subInfo"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder=" Submission Information"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>


                            <div className="">
                                <label htmlFor='image' className="block text-sm font-medium text-gray-700">
                                    Select Image:
                                </label>
                                <input className="border-primary border-2 px-2 py-3"
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>

                        </div>





                        <div>
                            <label htmlFor='image' className="block text-sm font-medium text-gray-700"> Task Details
                            </label>
                            <textarea
                                name="taskDetails"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                placeholder="Message"
                                rows="8"
                                id="message"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <input
                                type="submit"
                                value="Add Task"
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            />

                        </div>
                    </form>
                </div>
                {/* </div> */}
            </div>
        </section>
=======
=======


>>>>>>> 47af664 (add task part done some part left)

const AddTask = () => {
    const { user } = useAuth();
    const [role] = useInfo();
=======
>>>>>>> 415e466 (update the user coin after he add any task)
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date())
    const axiosSecure = useAxiosSecure();


    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const amount = parseInt(form.amount.value);
        const taskNumber = parseInt(form.taskNumber.value);
        if (role.coin < amount * taskNumber) {
            toast.error("You don't have sufficient coin to create a task!!! You should buy some coin.");
            navigate('/dashboard/purchase-coin')
            return;
        }
        const taskName = form.taskName.value;
        const completionDate = startDate.toLocaleDateString();
        const subInfo = form.subInfo.value;
        const image = form.image.files[0];
        const taskDetails = form.taskDetails.value;

        try {
            const taskImage = await imageUpload(image);
            const taskData = {
                taskName, taskNumber, amount, completionDate, subInfo, taskDetails, taskImage,
                taskProvider: {
                    name: user?.displayName,
                    email: user?.email,
                    photoURL: user?.photoURL,
                }
            }
            console.log(taskData);
            const { data } = await axiosSecure.post('/tasks', taskData);
            if (data.insertedId) {
                const newCoin = role?.coin - (taskNumber * amount);
                const update = await axiosSecure.patch(`user/${user?.email}`, { newCoin });
                console.log(update);
                if (update.data.modifiedCount) {
                    toast.success("Your task add into our server");
                    refetch();
                    navigate('/dashboard/my-task');
                }
            }


        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }


    }

    return (
        <section className="bg-gray-100">
            <Helmet>
                <title> Work Provider || Dashboard | Add task  </title>
            </Helmet>            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                {/* <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5"> */}

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Name </label>
                                <input
                                    name="taskName"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Quantity </label>
                                <input
                                    name="taskNumber"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="number"
                                    id="name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Payable amount </label>
                                <input
                                    name="amount"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="number"
                                    id="name"
                                    required
                                />
                            </div>


                            <div className='flex flex-col gap-2 '>
                                <label className='block text-sm font-medium text-gray-700"'>Deadline</label>

                                {/* Date Picker Input Field */}
                                <DatePicker
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div>

                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Submission Information  </label>
                                <input
                                    name="subInfo"
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder=" Submission Information"
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>


                            <div className="">
                                <label htmlFor='image' className="block text-sm font-medium text-gray-700">
                                    Select Image:
                                </label>
                                <input className="border-primary border-2 px-2 py-3"
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>

                        </div>





                        <div>
                            <label htmlFor='image' className="block text-sm font-medium text-gray-700"> Task Details
                            </label>
                            <textarea
                                name="taskDetails"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                placeholder="Message"
                                rows="8"
                                id="message"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <input
                                type="submit"
                                value="Add Task"
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            />

                        </div>
                    </form>
                </div>
<<<<<<< HEAD
            </section>
        </div>
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
                {/* </div> */}
            </div>
        </section>
>>>>>>> 5101158 (task submission done)
    );
};

export default AddTask;