import NavigationDash from "../NavigationDash";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import { PiHandWithdrawFill } from "react-icons/pi";

const WorkerMenu = () => {
    return (
        <div>
            <NavigationDash
                label='Home'
                address='/dashboard'
                icon={FaHome} />

            <NavigationDash
                label='Approved Submission'
                address='/dashboard/approved-submission'
                icon={FaHome} />

            <NavigationDash
                label='Task List'
                address='/dashboard/task-list'
                icon={FaTasks} />

            <NavigationDash
                label='My submission'
                address='/dashboard/my-submission'
                icon={IoIosCloudDone} />

            <NavigationDash
                label='WithDraw'
                address='/dashboard/withDraw'
                icon={PiHandWithdrawFill} />
        </div>
    );
};

export default WorkerMenu;