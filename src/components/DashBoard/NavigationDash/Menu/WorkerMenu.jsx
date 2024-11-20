import NavigationDash from "../NavigationDash";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
<<<<<<< HEAD
<<<<<<< HEAD
import { PiHandWithdrawFill } from "react-icons/pi";
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
import { PiHandWithdrawFill } from "react-icons/pi";
>>>>>>> bf8266c (review a pending task and pay the user)

const WorkerMenu = () => {
    return (
        <div>
            <NavigationDash
                label='Home'
                address='/dashboard'
                icon={FaHome} />

            <NavigationDash
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6adfd86 (approved Submission done for worker)
                label='Approved Submission'
                address='/dashboard/approved-submission'
                icon={FaHome} />

            <NavigationDash
<<<<<<< HEAD
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
>>>>>>> 6adfd86 (approved Submission done for worker)
                label='Task List'
                address='/dashboard/task-list'
                icon={FaTasks} />

            <NavigationDash
                label='My submission'
                address='/dashboard/my-submission'
                icon={IoIosCloudDone} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bf8266c (review a pending task and pay the user)

            <NavigationDash
                label='WithDraw'
                address='/dashboard/withDraw'
                icon={PiHandWithdrawFill} />
<<<<<<< HEAD
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
>>>>>>> bf8266c (review a pending task and pay the user)
        </div>
    );
};

export default WorkerMenu;