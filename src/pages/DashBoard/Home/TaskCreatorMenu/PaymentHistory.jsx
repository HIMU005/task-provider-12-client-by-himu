<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 94c638c (payment history done)
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import PaymentDetailsRow from "../../../../components/DashBoard/TableRow/PaymentDetailsRow";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/purchase-coin/${user?.email}`);
            return data;
        }
    })
    return (
<<<<<<< HEAD
        <div className="overflow-x-auto rounded-lg border border-gray-200" >
            <Helmet>
                <title> Work Provider || Dashboard | Payment history  </title>
            </Helmet>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Transaction Id</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Buy Coin</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pay amount</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {payments.map((payment, idx) =>
                        <PaymentDetailsRow
                            key={payment._id}
                            payment={payment}
                            idx={idx}
                        />)}


                </tbody>
            </table>
=======
=======
>>>>>>> 94c638c (payment history done)

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/purchase-coin/${user?.email}`);
            return data;
        }
    })
    return (
<<<<<<< HEAD
        <div>
            payment history
>>>>>>> 087dfad (set up all home route and dashboard route)
=======


=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
        <div className="overflow-x-auto rounded-lg border border-gray-200" >
            <Helmet>
                <title> Work Provider || Dashboard | Payment history  </title>
            </Helmet>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">#</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Transaction Id</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Buy Coin</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Pay amount</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {payments.map((payment, idx) =>
                        <PaymentDetailsRow
                            key={payment._id}
                            payment={payment}
                            idx={idx}
                        />)}


                </tbody>
            </table>
>>>>>>> 94c638c (payment history done)
        </div>
    );
};

export default PaymentHistory;