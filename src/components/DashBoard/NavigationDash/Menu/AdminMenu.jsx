import NavigationDash from "../NavigationDash";
import { FaHome } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { MdOutlineManageHistory } from "react-icons/md";
<<<<<<< HEAD
<<<<<<< HEAD
import { PiHandWithdrawDuotone } from "react-icons/pi";
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
import { PiHandWithdrawDuotone } from "react-icons/pi";
>>>>>>> 02aa898 (hero section done)

const AdminMenu = () => {
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
>>>>>>> 02aa898 (hero section done)
                label='Withdraw Request'
                address='/dashboard/withdrawRequest'
                icon={PiHandWithdrawDuotone} />

            <NavigationDash
<<<<<<< HEAD
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
>>>>>>> 02aa898 (hero section done)
                label='Manage Users'
                address='/dashboard/manage-users'
                icon={FcManager} />

            <NavigationDash
                label='Manage Tasks'
                address='/dashboard/manage-tasks'
                icon={MdOutlineManageHistory} />

        </div>
    );
};

export default AdminMenu;