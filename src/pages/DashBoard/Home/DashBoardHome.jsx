<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import useInfo from "../../../Hooks/useInfo";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import AdminHome from './AdminHome/AdminHome'
import TaskCreatorHome from "./TaskCreatorMenu/TaskCreatorHome";
import WorkerHome from "./WorkerHome/WorkerHome";
<<<<<<< HEAD

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
=======
=======
import { Helmet } from "react-helmet-async";
>>>>>>> d8d0a65 (implement helmet of dynamic title)
=======
>>>>>>> 0baa999 (dashboard home page done)

const DashBoardHome = () => {
    const [role, isLoading] = useInfo();
    if (isLoading) <LoadingSpinner />
    return (
        <div>
            <Helmet>
                <title> Work Provider || Dashboard   </title>
            </Helmet>
<<<<<<< HEAD
            home
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
            {role.role === 'admin' && <AdminHome />}
            {role.role === 'task-creator' && <TaskCreatorHome />}
            {role.role === 'worker' && <WorkerHome />}
>>>>>>> 0baa999 (dashboard home page done)
        </div>
    );
};

export default DashBoardHome;