import PropTypes from 'prop-types';
<<<<<<< HEAD
<<<<<<< HEAD
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const WithdrawRequestRow = ({ value, refetch }) => {
    const { workerName, workerEmail, amount, coin, accountNumber, paymentSystem, withDrawTime, _id } = value;
    const axiosSecure = useAxiosSecure();
    const handleConfirm = async () => {
        const worker = await axiosSecure.get(`/user/${workerEmail}`)
        const newCoin = worker?.data?.coin - coin;
        try {
            const { data } = await axiosSecure.patch(`/user/${workerEmail}`, { newCoin })
            if (data.modifiedCount) {
                const deleteCollection = await axiosSecure.delete(`/withDraw/${_id}`)
                if (deleteCollection.data.deletedCount) {
                    toast.success(`$ ${amount} paid to ${workerName}`)
                    refetch();
                }
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }


    }
=======

const WithdrawRequestRow = ({ value }) => {
    const { workerName, amount, coin, accountNumber, paymentSystem, withDrawTime } = value;
>>>>>>> 02aa898 (hero section done)
=======
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const WithdrawRequestRow = ({ value, refetch }) => {
    const { workerName, workerEmail, amount, coin, accountNumber, paymentSystem, withDrawTime, _id } = value;
    const axiosSecure = useAxiosSecure();
    const handleConfirm = async () => {
        const worker = await axiosSecure.get(`/user/${workerEmail}`)
        const newCoin = worker?.data?.coin - coin;
        try {
            const { data } = await axiosSecure.patch(`/user/${workerEmail}`, { newCoin })
            if (data.modifiedCount) {
                const deleteCollection = await axiosSecure.delete(`/withDraw/${_id}`)
                if (deleteCollection.data.deletedCount) {
                    toast.success(`$ ${amount} paid to ${workerName}`)
                    refetch();
                }
            }
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }


    }
>>>>>>> 0473d59 (withdraw request part done)
    return (
        <tr className='text-center'>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{workerName}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{amount}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{coin}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{accountNumber}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{paymentSystem}</td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{withDrawTime}</td>
            <td className="whitespace-nowrap px-4 py-2">
<<<<<<< HEAD
<<<<<<< HEAD
                <button onClick={handleConfirm} className='btn btn-success btn-outline'>Payment SuccessFull</button>
=======
                <button className='btn btn-success btn-outline'>Payment SuccessFull</button>
>>>>>>> 02aa898 (hero section done)
=======
                <button onClick={handleConfirm} className='btn btn-success btn-outline'>Payment SuccessFull</button>
>>>>>>> 0473d59 (withdraw request part done)
            </td>
        </tr>
    );
};

export default WithdrawRequestRow;
WithdrawRequestRow.propTypes = {
    value: PropTypes.object,
<<<<<<< HEAD
<<<<<<< HEAD
    refetch: PropTypes.func,
=======
>>>>>>> 02aa898 (hero section done)
=======
    refetch: PropTypes.func,
>>>>>>> 0473d59 (withdraw request part done)
}