<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0baa999 (dashboard home page done)
import { useQuery } from '@tanstack/react-query'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import LoadingSpinner from '../../../../components/Shared/LoadingSpinner';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
<<<<<<< HEAD

const TaskCreatorHome = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    // Fetch host Stat Data here
    const { data: taskData = {}, isLoading } = useQuery({
        queryKey: ['taskData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/taskCreator-stat', { email: user?.email })
            return data
        },
    })
    const chartData = [
        { name: "Total Submissions", value: taskData.totalSubmission },
        { name: "Total Purchases", value: taskData.totalPurchase },
        { name: "Total Tasks", value: taskData.totalTask }
    ];

    if (isLoading) return <LoadingSpinner />
    return (
        <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
                top: 20, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    )
}

export default TaskCreatorHome
=======
=======
>>>>>>> 0baa999 (dashboard home page done)

const TaskCreatorHome = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth();
    // Fetch host Stat Data here
    const { data: taskData = {}, isLoading } = useQuery({
        queryKey: ['taskData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/taskCreator-stat', { email: user?.email })
            return data
        },
    })
    const chartData = [
        { name: "Total Submissions", value: taskData.totalSubmission },
        { name: "Total Purchases", value: taskData.totalPurchase },
        { name: "Total Tasks", value: taskData.totalTask }
    ];

<<<<<<< HEAD
export default TaskCreatorHome;
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
    if (isLoading) return <LoadingSpinner />
    return (
        <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
                top: 20, right: 30, left: 20, bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
    )
}

export default TaskCreatorHome
>>>>>>> 0baa999 (dashboard home page done)
