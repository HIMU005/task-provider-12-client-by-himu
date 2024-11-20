
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0baa999 (dashboard home page done)
import { useQuery } from '@tanstack/react-query'

import LoadingSpinner from '../../../../components/Shared/LoadingSpinner'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

<<<<<<< HEAD
const WorkerHome = () => {
    const axiosSecure = useAxiosSecure()
    // Fetch guest Stat Data here
    const { data: workerData = {}, isLoading } = useQuery({
        queryKey: ['statData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/worker-stat')
            return data
        },
    })
    const chartData = [
        { name: "Total Submissions", value: workerData.totalSubmission },
        { name: "Total WithDraw", value: workerData.totalWithDraw },
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

export default WorkerHome
=======
=======
>>>>>>> 0baa999 (dashboard home page done)
const WorkerHome = () => {
    const axiosSecure = useAxiosSecure()
    // Fetch guest Stat Data here
    const { data: workerData = {}, isLoading } = useQuery({
        queryKey: ['statData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/worker-stat')
            return data
        },
    })
    const chartData = [
        { name: "Total Submissions", value: workerData.totalSubmission },
        { name: "Total WithDraw", value: workerData.totalWithDraw },
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

<<<<<<< HEAD
export default WorkerHome;
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
export default WorkerHome
>>>>>>> 0baa999 (dashboard home page done)
