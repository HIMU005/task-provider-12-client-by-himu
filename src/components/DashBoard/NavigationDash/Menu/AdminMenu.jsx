import NavigationDash from "../NavigationDash";
import { FaHome } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { MdOutlineManageHistory } from "react-icons/md";

const AdminMenu = () => {
    return (
        <div>
            <NavigationDash
                label='Home'
                address='/dashboard'
                icon={FaHome} />

            <NavigationDash
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