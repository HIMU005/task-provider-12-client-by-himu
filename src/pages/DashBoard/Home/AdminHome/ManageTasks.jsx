<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageTaskRow from "../../../../components/DashBoard/TableRow/ManageTaskRow";
import { Helmet } from "react-helmet-async";

const ManageTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/tasks');
            return data.filter(task => task.taskNumber > 0);
        }
    })
    return (


        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Helmet>
                <title> Work Provider || Dashboard | Manage Task  </title>
            </Helmet>
<<<<<<< HEAD
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"># </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task title</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task Creator Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task Count</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Coin Needed</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Availability </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">View </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        tasks.map((task, idx) =>
                            <ManageTaskRow
                                key={task._id}
                                task={task}
                                idx={idx}
                                refetch={refetch}
                            />)
                    }


                </tbody>
            </table>
=======
=======
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ManageTaskRow from "../../../../components/DashBoard/TableRow/ManageTaskRow";
>>>>>>> e2fa3cb (manage task view details in modal)

const ManageTasks = () => {
    const axiosSecure = useAxiosSecure();
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/tasks');
            return data.filter(task => task.taskNumber > 0);
        }
    })
    return (
<<<<<<< HEAD
        <div>
            manage task
>>>>>>> 087dfad (set up all home route and dashboard route)
=======


        <div className="overflow-x-auto rounded-lg border border-gray-200">
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"># </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task title</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task Creator Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task Count</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Coin Needed</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Availability </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">View </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        tasks.map((task, idx) =>
                            <ManageTaskRow
                                key={task._id}
                                task={task}
                                idx={idx}
                                refetch={refetch}
                            />)
                    }


                </tbody>
            </table>
>>>>>>> e2fa3cb (manage task view details in modal)
        </div>
    );
};

export default ManageTasks;