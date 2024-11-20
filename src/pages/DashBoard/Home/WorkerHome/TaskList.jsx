<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import TaskCard from "../../../../components/DashBoard/Worker/TaskCard";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const TaskList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: works = [] } = useQuery({
        queryKey: ['works'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/tasks');
            return data.filter(task => task.taskNumber > 0);
        }
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Helmet>
                <title> Work Provider || Dashboard | Tasklist  </title>
            </Helmet>
            {works.map(work => <TaskCard key={work._id} work={work} />)}
=======
=======
import { useQuery } from "@tanstack/react-query";
import TaskCard from "../../../../components/DashBoard/Worker/TaskCard";
<<<<<<< HEAD
>>>>>>> 5101158 (task submission done)
=======
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
>>>>>>> 02aa898 (hero section done)

const TaskList = () => {
    const axiosSecure = useAxiosSecure();
    const { data: works = [] } = useQuery({
        queryKey: ['works'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/tasks');
            return data.filter(task => task.taskNumber > 0);
        }
    })
    return (
<<<<<<< HEAD
        <div>
            task list
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map(work => <TaskCard key={work._id} work={work} />)}
>>>>>>> 5101158 (task submission done)
        </div>
    );
};

export default TaskList;