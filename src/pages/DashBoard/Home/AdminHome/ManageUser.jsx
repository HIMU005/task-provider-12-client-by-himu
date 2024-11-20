<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserRow from "../../../../components/DashBoard/TableRow/UserRow";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users');
            return data;
        }
    })

    const handleDelete = async () => {
        console.log('delete');
    }
    return (
<<<<<<< HEAD
        < div className="overflow-x-auto rounded-lg border border-gray-200" >
            <Helmet>
                <title> Work Provider || Dashboard | Manage Route   </title>
            </Helmet>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Registered at</th>
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Role</th>
                        {/* <th className="whitespace-nowrap py-2 font-medium text-gray-900">Action</th> */}
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        users.map(user =>
                            <UserRow
                                key={user?._id}
                                user={user}
                                handleDelete={handleDelete}
                                refetch={refetch}
                            />
                        )
                    }



                </tbody>
            </table>
        </ div>
=======
=======
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import UserRow from "../../../../components/DashBoard/TableRow/UserRow";
>>>>>>> db7b544 (purchase coin successfully finished)

const ManageUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users');
            return data;
        }
    })

    const handleDelete = async () => {
        console.log('delete');
    }
    return (
<<<<<<< HEAD
        <div>
            manage users
        </div>
>>>>>>> 087dfad (set up all home route and dashboard route)
=======


=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
        < div className="overflow-x-auto rounded-lg border border-gray-200" >
            <Helmet>
                <title> Work Provider || Dashboard | Manage Route   </title>
            </Helmet>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Name</th>
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Registered at</th>
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Role</th>
                        {/* <th className="whitespace-nowrap py-2 font-medium text-gray-900">Action</th> */}
                        <th className="whitespace-nowrap py-2 font-medium text-gray-900">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        users.map(user =>
                            <UserRow
                                key={user?._id}
                                user={user}
                                handleDelete={handleDelete}
                                refetch={refetch}
                            />
                        )
                    }



                </tbody>
            </table>
        </ div>
>>>>>>> db7b544 (purchase coin successfully finished)
    );
};

export default ManageUser;