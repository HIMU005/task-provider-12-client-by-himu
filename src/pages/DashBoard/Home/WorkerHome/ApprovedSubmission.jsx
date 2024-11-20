import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> 6adfd86 (approved Submission done for worker)
=======
import { Helmet } from "react-helmet-async";
>>>>>>> d8d0a65 (implement helmet of dynamic title)

const ApprovedSubmission = () => {
    const axiosSecure = useAxiosSecure()
    const { data: approvedSubmissions = [] } = useQuery({
        queryKey: ['approvedSubmissions'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/submissions');
            return data.filter(task => task.status === 'accepted');
        }
    })
<<<<<<< HEAD
<<<<<<< HEAD
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Helmet>
                <title> Work Provider || Dashboard | Approved submission  </title>
            </Helmet>
=======
    console.log(approvedSubmissions);
=======
>>>>>>> dd135b8 (secure frontend for worker)
    return (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
<<<<<<< HEAD
>>>>>>> 6adfd86 (approved Submission done for worker)
=======
            <Helmet>
                <title> Work Provider || Dashboard | Approved submission  </title>
            </Helmet>
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Task Title</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Payable amount</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Creator Name</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        approvedSubmissions.map(approvedSubmission =>
                            <tr key={approvedSubmission._id} className="text-center">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{approvedSubmission?.taskName}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{approvedSubmission?.amount
                                }</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{approvedSubmission?.taskProvider?.name}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-green-400">{approvedSubmission?.status}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedSubmission;