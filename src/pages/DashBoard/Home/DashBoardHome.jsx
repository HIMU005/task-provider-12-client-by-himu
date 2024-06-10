import { Helmet } from "react-helmet-async";
import useInfo from "../../../Hooks/useInfo";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import AdminHome from './AdminHome/AdminHome'
import TaskCreatorHome from "./TaskCreatorMenu/TaskCreatorHome";
import WorkerHome from "./WorkerHome/WorkerHome";

const DashBoardHome = () => {
    const [role, isLoading] = useInfo();
    if (isLoading) <LoadingSpinner />
    return (
        <div>
            <Helmet>
                <title> Work Provider || Dashboard   </title>
            </Helmet>
            {role.role === 'admin' && <AdminHome />}
            {role.role === 'task-creator' && <TaskCreatorHome />}
            {role.role === 'worker' && <WorkerHome />}
        </div>
    );
};

export default DashBoardHome;