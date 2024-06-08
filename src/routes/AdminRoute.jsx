import useInfo from "../Hooks/useInfo";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useInfo()
    const { user, loading } = useAuth();


    if (isLoading || loading) return <h3>Wait</h3>
    if (role.role === 'admin' && user) return children
    return <Navigate to='/dashboard' />
}

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.element,
}