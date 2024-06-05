import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../../../Hooks/useAxiosSecure";
import TaskCard from "../../../../components/DashBoard/Worker/TaskCard";

const TaskList = () => {
    const { data: works = [] } = useQuery({
        queryKey: ['works'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/tasks');
            return data.filter(task => task.taskNumber > 0);
        }
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {works.map(work => <TaskCard key={work._id} work={work} />)}
        </div>
    );
};

export default TaskList;