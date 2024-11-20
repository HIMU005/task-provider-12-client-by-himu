import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import ReviewTaskRow from "../../../../components/DashBoard/TableRow/ReviewTaskRow";
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> bf8266c (review a pending task and pay the user)
=======
import { Helmet } from "react-helmet-async";
>>>>>>> d8d0a65 (implement helmet of dynamic title)

const ReviewATask = () => {
    const axiosSecure = useAxiosSecure();
    const { data: reviewTasks = [], refetch } = useQuery({
        queryKey: ['reviewTasks'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/submissions');
            return data.filter(task => task.status === 'pending');
        }
    })
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="overflow-x-auto" >
            <Helmet>
                <title> Work Provider || Dashboard | Review task  </title>
            </Helmet>
=======


        <div className="overflow-x-auto" >
>>>>>>> bf8266c (review a pending task and pay the user)
=======
        <div className="overflow-x-auto" >
            <Helmet>
                <title> Work Provider || Dashboard | Review task  </title>
            </Helmet>
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Worker Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">taskTitle</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Payable amount</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">View Details</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {reviewTasks.map((reviewTask, idx) =>
                        <ReviewTaskRow
                            key={reviewTask._id}
                            reviewTask={reviewTask}
                            refetch={refetch}
                            idx={idx}
                        />)}


                </tbody>
            </table>
        </div >
    );
};

export default ReviewATask;