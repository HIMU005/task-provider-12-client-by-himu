<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e19918a (my task route done)
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import TaskCreatorTableRow from "../../../../components/DashBoard/TableRow/TaskCreatorTableRow";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
import { Helmet } from "react-helmet-async";

const MyTasks = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        // enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/tasks/${user?.email}`);
            return data;
        },
    })
    { isLoading && <h2>Wait</h2> }

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title> Work Provider || Dashboard | My task  </title>
            </Helmet>            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
<<<<<<< HEAD
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Title</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Count</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Payable amount</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Action</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        tasks.map(task => <TaskCreatorTableRow key={task._id} task={task} refetch={refetch} />)
                    }
                </tbody>
            </table>
=======
=======
>>>>>>> e19918a (my task route done)

const MyTasks = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        // enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/tasks/${user?.email}`);
            return data;
        },
    })
    { isLoading && <h2>Wait</h2> }

    return (
<<<<<<< HEAD
        <div>
<<<<<<< HEAD
            my tasks
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Title</th>
                            <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Count</th>
                            <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Payable amount</th>
                            <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Action</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {
                            tasks.map(task => <TaskCreatorTableRow key={task._id} task={task} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
>>>>>>> e19918a (my task route done)
=======
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Title</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Count</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Payable amount</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Action</th>
                        <th className="px-4 py-2">Action</th>
                        <th className="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        tasks.map(task => <TaskCreatorTableRow key={task._id} task={task} refetch={refetch} />)
                    }
                </tbody>
            </table>
>>>>>>> 546bd25 (my submission routed done)
        </div>
    );
};

export default MyTasks;