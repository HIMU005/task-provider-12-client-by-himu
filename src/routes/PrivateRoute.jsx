import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) return <h2>Wait</h2>
    if (user) return children;
    return <Navigate to='/login' state={location.pathname} replace='true' />

};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.element,
}