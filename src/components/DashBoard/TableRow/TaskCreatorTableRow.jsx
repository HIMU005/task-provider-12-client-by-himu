import PropTypes from 'prop-types';

const TaskCreatorTableRow = ({ task, refetch }) => {
    const { taskName, taskNumber, amount, } = task;
    return (
        <tr>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{taskName}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{taskNumber}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{amount}</td>
            <td className="whitespace-nowrap px-4 py-2 ">
                <button
                    className="inline-block rounded btn btn-accent btn-outline px-4 py-0 text-xs font-medium "
                >
                    Update
                </button></td>
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