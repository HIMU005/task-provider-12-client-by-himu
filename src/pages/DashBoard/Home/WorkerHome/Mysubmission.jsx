<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 546bd25 (my submission routed done)
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import MysubmissionRow from "../../../../components/DashBoard/TableRow/MysubmissionRow";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
import { Helmet } from "react-helmet-async";

const Mysubmission = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: mySubmits = [] } = useQuery({
        queryKey: ['mySubmits', user?.email],
        // enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/submissions/${user?.email}`);
            return data;
        },
    })
    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title> Work Provider || Dashboard | Mysubmission  </title>
            </Helmet>

<<<<<<< HEAD
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">No.</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Id</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Title</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Provider</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Payable amount</th>
                        <th className={`whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900`}>Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        mySubmits.map((mySubmit, idx) => <MysubmissionRow
                            key={mySubmit._id}
                            idx={idx + 1}
                            mySubmit={mySubmit}
                        />)
                    }
                </tbody>
            </table>
=======
=======
>>>>>>> 546bd25 (my submission routed done)

const Mysubmission = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: mySubmits = [] } = useQuery({
        queryKey: ['mySubmits', user?.email],
        // enabled: !isLoading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/submissions/${user?.email}`);
            return data;
        },
    })
    return (
<<<<<<< HEAD
        <div>
            my submission
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
        <div className="overflow-x-auto">
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">No.</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Id</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Title</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Task Provider</th>
                        <th className="whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900">Payable amount</th>
                        <th className={`whitespace-nowrap px-4 text-left py-2 font-medium text-gray-900`}>Status</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        mySubmits.map((mySubmit, idx) => <MysubmissionRow
                            key={mySubmit._id}
                            idx={idx + 1}
                            mySubmit={mySubmit}
                        />)
                    }
                </tbody>
            </table>
>>>>>>> 546bd25 (my submission routed done)
        </div>
    );
};

export default Mysubmission;