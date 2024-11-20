import useInfo from "../Hooks/useInfo";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
<<<<<<< HEAD
<<<<<<< HEAD
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useInfo()
    const { user, loading } = useAuth();


    if (isLoading || loading) return <h3>Wait</h3>
    if (role.role === 'admin' && user) return children
=======
=======
import useAuth from "../Hooks/useAuth";
>>>>>>> a18e3db (secure frontend for admin)

const AdminRoute = ({ children }) => {
    const [role, isLoading] = useInfo()
    const { user, loading } = useAuth();

<<<<<<< HEAD
    if (isLoading) return <h3>Wait</h3>
    if (role === 'admin') return children
>>>>>>> 15e7f50 (private route , authorization route setup)
=======

    if (isLoading || loading) return <h3>Wait</h3>
    if (role.role === 'admin' && user) return children
>>>>>>> a18e3db (secure frontend for admin)
    return <Navigate to='/dashboard' />
}

export default AdminRoute;
AdminRoute.propTypes = {
    children: PropTypes.element,
}