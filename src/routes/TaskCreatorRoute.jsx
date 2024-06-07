import useInfo from "../Hooks/useInfo";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const TaskCreatorRoute = ({ children }) => {
    const [role, isLoading] = useInfo()

    if (isLoading) return <h3>Wait</h3>
    if (role === 'task-creator') return children
    return <Navigate to='/dashboard' />
}

export default TaskCreatorRoute;
TaskCreatorRoute.propTypes = {
    children: PropTypes.element,
}