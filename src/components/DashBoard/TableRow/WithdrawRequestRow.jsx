import PropTypes from 'prop-types';

const WithdrawRequestRow = ({ value }) => {
    const { workerName, amount, coin, accountNumber, paymentSystem, withDrawTime } = value;
    return (
        <tr className='text-center'>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{workerName}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{amount}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{accountNumber}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{paymentSystem}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{withDrawTime}</td>
            <td className="whitespace-nowrap px-4 py-2">
                <button className='btn btn-success btn-outline'>Payment SuccessFull</button>
            </td>
        </tr>
    );
};

export default WithdrawRequestRow;
WithdrawRequestRow.propTypes = {
    value: PropTypes.object,
}