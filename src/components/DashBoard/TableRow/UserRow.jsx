import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const UserRow = ({ user, handleDelete, refetch }) => {
    const [newRole, setNewRole] = useState(user?.role);
    const axiosSecure = useAxiosSecure();
    const handleRoleChange = (e) => {
        setNewRole(e.target.value);
    }
    const handleUpdate = async () => {
        if (user?.role === 'admin') {
            toast.error("you can't change the role of an user")
            refetch();
            return
        }

        try {
            const { data } = await axiosSecure.patch(`/user/role/${user?.email}`, { newRole })
            if (data.modifiedCount) {
                toast.success('user Role now updated');
                refetch();
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }

    }

    return (
        <tr>
            <td className="whitespace-nowrap ml-6 text-center py-2 font-medium text-gray-900">{user?.displayName}</td>
            <td className="whitespace-nowrap ml-6 text-center py-2 text-gray-700">later Update</td>
            <td>
                <select
                    name="newRole"
                    defaultValue={user?.role}
                    onChange={handleRoleChange}
<<<<<<< HEAD
<<<<<<< HEAD
                    disabled={user?.role === 'admin'}
=======
>>>>>>> db7b544 (purchase coin successfully finished)
=======
                    disabled={user?.role === 'admin'}
>>>>>>> a18e3db (secure frontend for admin)
                    id=""
                    className={` 
                                ${user?.role === 'admin' ? 'text-blue-500' : ''}
                                ${user?.role === 'worker' ? 'text-green-500' : ''}
                                ${user?.role === 'task-creator' ? 'text-red-500' : ''}
                                `}
                >
                    <option className="text-blue-500" value="admin">Admin</option>
                    <option className="text-green-500" value="worker">Worker</option>
                    <option className="text-red-500" value="task-creator">Task Creator</option>
                </select></td>
            <td onClick={handleUpdate} className="whitespace-nowrap ml-6 text-center py-2 text-gray-700">
<<<<<<< HEAD
<<<<<<< HEAD
                <button className='btn btn-info btn-outline'> Update</button>
            </td>
            <td onClick={handleDelete} className="whitespace-nowrap ml-6 text-center py-2 text-gray-700">
                <button className='btn btn-warning btn-outline'> Delete</button>
=======
                Update
            </td>
            <td onClick={handleDelete} className="whitespace-nowrap ml-6 text-center py-2 text-gray-700">
                Delete
>>>>>>> db7b544 (purchase coin successfully finished)
=======
                <button className='btn btn-info btn-outline'> Update</button>
            </td>
            <td onClick={handleDelete} className="whitespace-nowrap ml-6 text-center py-2 text-gray-700">
                <button className='btn btn-warning btn-outline'> Delete</button>
>>>>>>> a18e3db (secure frontend for admin)
            </td>
        </tr>
    );
};

<<<<<<< HEAD
<<<<<<< HEAD
UserRow.propTypes = {
    user: PropTypes.object,
    handleDelete: PropTypes.func,
    refetch: PropTypes.func,
=======
UserRow.propsTypes = {
    user: PropTypes.object,
    handleDelete: PropTypes.func,
    displayName: PropTypes.string,
    handleUpdate: PropTypes.func,
>>>>>>> db7b544 (purchase coin successfully finished)
=======
UserRow.propTypes = {
    user: PropTypes.object,
    handleDelete: PropTypes.func,
    refetch: PropTypes.func,
>>>>>>> a18e3db (secure frontend for admin)
}
export default UserRow;