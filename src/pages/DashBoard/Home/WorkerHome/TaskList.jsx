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
        </div>
    );
};

export default TaskList;