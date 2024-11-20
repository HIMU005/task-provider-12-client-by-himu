import useInfo from "../Hooks/useInfo";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
<<<<<<< HEAD
<<<<<<< HEAD
import useAuth from "../Hooks/useAuth";

const TaskCreatorRoute = ({ children }) => {
    const [role, isLoading] = useInfo()
    const { user, loading } = useAuth();

    if (isLoading || loading) return <h3>Wait</h3>

<<<<<<< HEAD
    if (role.role === 'task-creator' && user) return children
=======
=======
import useAuth from "../Hooks/useAuth";
>>>>>>> 0f62718 (fixed bug in authprovider)

const TaskCreatorRoute = ({ children }) => {
    const [role, isLoading] = useInfo()
    const { user, loading } = useAuth();

<<<<<<< HEAD
    if (isLoading) return <h3>Wait</h3>
    if (role === 'task-creator') return children
>>>>>>> 15e7f50 (private route , authorization route setup)
=======
    if (isLoading || loading) return <h3>Wait</h3>
    // console.log(isLoading);
    // console.log(role.role);
=======
>>>>>>> a18e3db (secure frontend for admin)
    if (role.role === 'task-creator' && user) return children
>>>>>>> 0f62718 (fixed bug in authprovider)
    return <Navigate to='/dashboard' />
}

export default TaskCreatorRoute;
TaskCreatorRoute.propTypes = {
    children: PropTypes.element,
}