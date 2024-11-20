import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> 5101158 (task submission done)
=======
import { Helmet } from "react-helmet-async";
>>>>>>> d8d0a65 (implement helmet of dynamic title)

const TaskDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date())
    // console.log(role.role);

    const { data: singleWork = [] } = useQuery({
        queryKey: ['singleWork'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/task/${id}`);
            return data;
        }
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const subInfo = e.target.subInfo.value;
        const submissionDetails = {
            taskId: singleWork._id,
            taskName: singleWork?.taskName,
            taskDetails: singleWork?.taskDetails,
            taskImage: singleWork?.taskImage,
            amount: singleWork?.amount,
            subInfo,
            workerEmail: user?.email,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bf8266c (review a pending task and pay the user)
            worker: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
            },
<<<<<<< HEAD
=======
>>>>>>> 5101158 (task submission done)
=======
>>>>>>> bf8266c (review a pending task and pay the user)
            taskProvider: {
                name: singleWork.taskProvider.name,
                email: singleWork.taskProvider.email,
            },
            submissionDate: startDate.toLocaleDateString(),
            status: 'pending',
        }

        try {
            const { data } = await axiosSecure.post('/submissions', submissionDetails);
            if (data.insertedId) {
                toast.success(`Your task submission has registered. Wait for Task Provider response.`)
                navigate('/dashBoard/my-submission')
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }



    }
    return (
        <section className="bg-gray-100">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <Helmet>
                <title> Work Provider || Dashboard | Task details  </title>
            </Helmet>

<<<<<<< HEAD
=======
>>>>>>> 5101158 (task submission done)
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                {/* <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5"> */}

                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">

                            {/* task id  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> task id </label>
                                <input
                                    name="taskId"
                                    disabled
                                    className='w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    // required
                                    defaultValue={singleWork._id}
                                />
                            </div>

                            {/* task name  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Title </label>
                                <input
                                    name="taskName"
                                    className='w-full px-3 py-2 border cursor-not-allowed rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    // required
                                    disabled
                                    defaultValue={singleWork?.taskName}
                                />
                            </div>

                            {/* task details */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Details </label>
                                <input
                                    name="taskDetails"
                                    className='w-full px-3 py-2 border cursor-not-allowed rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    // required
                                    disabled
                                    defaultValue={singleWork?.taskDetails}
                                />
                            </div>

                            {/* task image  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task ImageLink </label>
                                <input
                                    name="taskImage"
                                    className='w-full px-3 py-2 cursor-not-allowed border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    // required
                                    disabled
                                    defaultValue={singleWork.taskImage}
                                />
                            </div>

                            {/* payable amount  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Payable amount </label>
                                <input
                                    name="amount"
                                    className='w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="number"
                                    id="name"
                                    // required
                                    disabled
                                    defaultValue={singleWork.amount}
                                />
                            </div>

                            {/* worker details  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">  Worker Name </label>
                                <input
                                    name="workerName"
                                    className='w-full px-3 py-2 cursor-not-allowed border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    disabled
                                    // required
                                    defaultValue={user?.displayName}
                                />
                            </div>

                            {/* creator name  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Creator Name </label>
                                <input
                                    name="taskProviderName"
                                    className='w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    // required
                                    disabled
                                    defaultValue={singleWork?.taskProvider?.name}
                                />
                            </div>

                            {/* creator email  */}
                            <div>
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Creator Email </label>
                                <input
                                    name="taskProviderEmail"
                                    className='w-full px-3 py-2 cursor-not-allowed border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    placeholder="Task name"
                                    type="text"
                                    id="name"
                                    // required
                                    disabled
                                    defaultValue={singleWork?.taskProvider?.name}

                                />
                            </div>

                            {/* current date  */}
                            <div className='flex flex-col gap-2 '>
                                <label className='block text-sm font-medium text-gray-700"'>Submission Date</label>

                                {/* Date Picker Input Field */}
                                <DatePicker
                                    className='w-full cursor-not-allowed px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    disabled
                                />
                            </div>
                        </div>

                        {/* submission information  */}
                        <div>
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Submission Information  </label>

                            <textarea
                                name="subInfo"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                placeholder="Message"
                                rows="8"
                                id="Submission Information"
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
    );
};

export default TaskDetails;