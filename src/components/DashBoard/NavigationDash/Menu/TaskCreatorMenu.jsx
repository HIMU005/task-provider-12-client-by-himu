import NavigationDash from "../NavigationDash";
import { FaHome } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
<<<<<<< HEAD
<<<<<<< HEAD
import { VscPreview } from "react-icons/vsc";
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
import { VscPreview } from "react-icons/vsc";
>>>>>>> bf8266c (review a pending task and pay the user)

const TaskCreatorMenu = () => {
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
>>>>>>> bf8266c (review a pending task and pay the user)
                label='Review Task'
                address='/dashboard/reviewTask'
                icon={VscPreview} />

            <NavigationDash
<<<<<<< HEAD
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
>>>>>>> bf8266c (review a pending task and pay the user)
                label='Add Task'
                address='/dashboard/add-task'
                icon={MdAddTask} />

            <NavigationDash
                label='My Tasks'
                address='/dashboard/my-task'
                icon={BsListTask} />

            <NavigationDash
                label='Purchase Coin'
                address='/dashboard/purchase-coin'
                icon={BiSolidPurchaseTag} />

            <NavigationDash
                label='Payment History'
                address='/dashboard/payment-history'
                icon={MdOutlineManageHistory} />

        </div>
    );
};

export default TaskCreatorMenu;