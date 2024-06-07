import useInfo from "../Hooks/useInfo";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useInfo()

    if (isLoading) return <h3>Wait</h3>
    if (role === 'admin') return children
    return <Navigate to='/dashboard' />
}

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.element,
}