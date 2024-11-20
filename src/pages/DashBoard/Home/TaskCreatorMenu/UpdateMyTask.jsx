<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { parse } from 'date-fns';
import { Helmet } from 'react-helmet-async';

const UpdateMyTask = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    // console.log(id);
    const { data: taskData = [], isLoading } = useQuery({
        queryKey: ['taskData', id],
        enabled: !!id || isLoading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/task/${id}`);
            return data;
        }
    })
    const navigate = useNavigate();
    const { amount, completionDate, subInfo, taskDetails, taskName, taskNumber, } = taskData;

    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        if (completionDate) {
            const parseDate = (dateStr) => {
                return parse(dateStr, 'M/d/yyyy', new Date());
            };
            const dateObject = parseDate(completionDate);
            setStartDate(dateObject);
        }
    }, [completionDate]);
=======
import { useState } from 'react';
=======
import { useEffect, useState } from 'react';
>>>>>>> 5a1d47d (secure front ent for task creator)
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { parse } from 'date-fns';

const UpdateMyTask = () => {
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    // console.log(id);
    const { data: taskData = [], isLoading } = useQuery({
        queryKey: ['taskData', id],
        enabled: !!id || isLoading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/task/${id}`);
            return data;
        }
    })
    const navigate = useNavigate();
    const { amount, completionDate, subInfo, taskDetails, taskName, taskNumber, } = taskData;

<<<<<<< HEAD
>>>>>>> 48864ca (task update part done)
=======
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        if (completionDate) {
            const parseDate = (dateStr) => {
                return parse(dateStr, 'M/d/yyyy', new Date());
            };
            const dateObject = parseDate(completionDate);
            setStartDate(dateObject);
        }
    }, [completionDate]);
>>>>>>> 5a1d47d (secure front ent for task creator)
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const taskName = form.taskName.value;
        const subInfo = form.subInfo.value;
        const taskDetails = form.taskDetails.value;
<<<<<<< HEAD
<<<<<<< HEAD
        // console.log(startDate);
=======
>>>>>>> 48864ca (task update part done)
=======
        // console.log(startDate);
>>>>>>> 5a1d47d (secure front ent for task creator)

        const updateTask = { taskName, subInfo, taskDetails }

        try {
            const { data } = await axiosSecure.patch(`/task/${taskData._id}`, updateTask)
            if (data.modifiedCount) {
                toast.success('Task Data successfully updated and saved in out server');
                navigate('/dashboard/my-task')
            }

        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }

    }
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <Helmet>
                <title> Work Provider || Dashboard | Update Task  </title>
            </Helmet>
=======
>>>>>>> 48864ca (task update part done)
=======
            <Helmet>
                <title> Work Provider || Dashboard | Update Task  </title>
            </Helmet>
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
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
                                        defaultValue={taskName}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Task Quantity </label>
                                    <input
                                        name="taskNumber"
                                        disabled
                                        className='w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="number"
                                        id="name"
                                        required
                                        defaultValue={taskNumber}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Payable amount </label>
                                    <input
                                        name="amount"
                                        disabled
                                        className='w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder="Task name"
                                        type="number"
                                        id="name"
                                        required
                                        defaultValue={amount}
                                    />
                                </div>

<<<<<<< HEAD
<<<<<<< HEAD
                                <div className="flex flex-col gap-2">
                                    <label className="block text-sm font-medium text-gray-700">Deadline</label>
                                    <DatePicker
                                        disabled
                                        className="w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>


=======

                                <div className='flex flex-col gap-2 '>
                                    <label className='block text-sm font-medium text-gray-700"'>Deadline</label>

                                    {/* Date Picker Input Field */}
=======
                                <div className="flex flex-col gap-2">
                                    <label className="block text-sm font-medium text-gray-700">Deadline</label>
>>>>>>> 5a1d47d (secure front ent for task creator)
                                    <DatePicker
                                        disabled
                                        className="w-full px-3 cursor-not-allowed py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>

<<<<<<< HEAD
>>>>>>> 48864ca (task update part done)
=======

>>>>>>> 5a1d47d (secure front ent for task creator)
                                <div>
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Submission Information  </label>
                                    <input
                                        name="subInfo"
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                        placeholder=" Submission Information"
                                        type="text"
                                        id="name"
                                        required
                                        defaultValue={subInfo}
                                    />
                                </div>


                                <div className="">
                                    <label htmlFor='image' className="block text-sm font-medium text-gray-700">
                                        Select Image:
                                    </label>
                                    <input className="border-primary border-2 cursor-not-allowed px-2 py-3"
                                        // required
                                        disabled
                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                    // value={taskImage}
                                    />
                                </div>

                            </div>


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> 48864ca (task update part done)
=======
>>>>>>> 5a1d47d (secure front ent for task creator)
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
                                    defaultValue={taskDetails}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <input
                                    type="submit"
                                    value="Update Task"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                />

                            </div>
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </section>
        </div>
    );
};

export default UpdateMyTask;