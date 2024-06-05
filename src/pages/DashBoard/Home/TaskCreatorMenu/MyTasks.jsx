import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import TaskCreatorTableRow from "../../../../components/DashBoard/TableRow/TaskCreatorTableRow";

const MyTasks = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: tasks = [], isLoading, refetch } = useQuery({
        queryKey: ['tasks', user?.email],
        // enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/task/${user?.email}`);
            return data;
        },
    })
    { isLoading && <h2>Wait</h2> }

    return (
        <div>
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
        </div>
    );
};

export default MyTasks;