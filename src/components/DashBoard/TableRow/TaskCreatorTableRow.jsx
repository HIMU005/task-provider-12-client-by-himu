import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const TaskCreatorTableRow = ({ task }) => {
=======

const TaskCreatorTableRow = ({ task, refetch }) => {
>>>>>>> e19918a (my task route done)
=======
import { Link } from 'react-router-dom';

const TaskCreatorTableRow = ({ task }) => {
>>>>>>> 48864ca (task update part done)
    const { taskName, taskNumber, amount, } = task;
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{taskName}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{taskNumber}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{amount}</td>
            <td className="whitespace-nowrap px-4 py-2 ">
<<<<<<< HEAD
<<<<<<< HEAD
                <Link to={`/dashboard/update/my-task/${task._id}`}
                    className="inline-block rounded btn btn-accent btn-outline px-4 py-0 text-xs font-medium "
                >
                    Update
                </Link></td>
=======
                <button
                    className="inline-block rounded btn btn-accent btn-outline px-4 py-0 text-xs font-medium "
                >
                    Update
                </button></td>
>>>>>>> e19918a (my task route done)
=======
                <Link to={`/dashboard/update/my-task/${task._id}`}
                    className="inline-block rounded btn btn-accent btn-outline px-4 py-0 text-xs font-medium "
                >
                    Update
                </Link></td>
>>>>>>> 48864ca (task update part done)
            <td className="whitespace-nowrap px-4 py-2">
                <button
                    className="inline-block rounded btn btn-error btn-outline px-4 py-0 text-xs font-medium "
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default TaskCreatorTableRow;
TaskCreatorTableRow.propTypes = {
    task: PropTypes.object,
    refetch: PropTypes.func,
}