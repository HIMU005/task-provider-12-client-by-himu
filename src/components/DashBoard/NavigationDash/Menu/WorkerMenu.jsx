import NavigationDash from "../NavigationDash";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";

const WorkerMenu = () => {
    return (
        <div>
            <NavigationDash
                label='Home'
                address='/dashboard'
                icon={FaHome} />

            <NavigationDash
                label='Task List'
                address='/dashboard/task-list'
                icon={FaTasks} />

            <NavigationDash
                label='My submission'
                address='/dashboard/my-submission'
                icon={IoIosCloudDone} />
        </div>
    );
};

export default WorkerMenu;