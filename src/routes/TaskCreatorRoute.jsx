import useInfo from "../Hooks/useInfo";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";

const TaskCreatorRoute = ({ children }) => {
    const [role, isLoading] = useInfo()
    const { user, loading } = useAuth();

    if (isLoading || loading) return <h3>Wait</h3>
    // console.log(isLoading);
    // console.log(role.role);
    if (role.role === 'task-creator' && user) return children
    return <Navigate to='/dashboard' />
}

export default TaskCreatorRoute;
TaskCreatorRoute.propTypes = {
    children: PropTypes.element,
}