import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import DashBoardHome from "../pages/DashBoard/Home/DashBoardHome";
import TaskList from "../pages/DashBoard/Home/WorkerHome/TaskList";
import Mysubmission from "../pages/DashBoard/Home/WorkerHome/Mysubmission";
import AddTask from "../pages/DashBoard/Home/TaskCreatorMenu/AddTask";
import MyTasks from "../pages/DashBoard/Home/TaskCreatorMenu/MyTasks";
import PaymentHistory from "../pages/DashBoard/Home/TaskCreatorMenu/PaymentHistory";
import PurchaseCoin from "../pages/DashBoard/Home/TaskCreatorMenu/PurchaseCoin";
import ManageUser from "../pages/DashBoard/Home/AdminHome/ManageUser";
import ManageTasks from "../pages/DashBoard/Home/AdminHome/ManageTasks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h3 className="text-5xl">404</h3>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: "/sign-up",
        element: <Register />
    },
    {
        path: '/dashBoard',
        element: <DashBoardLayout />,
        errorElement: <h2 className="text-6xl">404</h2>,
        children: [
            // a worker routes 
            {
                index: true,
                element: <DashBoardHome />,
            },
            {
                path: "task-list",
                element: <TaskList />,
            },
            {
                path: 'my-submission',
                element: <Mysubmission />
            },

            // task creator routes 
            {
                path: 'add-task',
                element: <AddTask />,
            },
            {
                path: 'my-task',
                element: <MyTasks />,
            },
            {
                path: 'purchase-coin',
                element: <PurchaseCoin />,
            },
            {
                path: 'payment-history',
                element: <PaymentHistory />,
            },

            // admin routes 
            {
                path: 'manage-users',
                element: <ManageUser />
            },
            {
                path: 'manage-tasks',
                element: <ManageTasks />
            }
        ]

    }


])