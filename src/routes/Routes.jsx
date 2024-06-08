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
import UpdateMyTask from "../pages/DashBoard/Home/TaskCreatorMenu/UpdateMyTask";
import TaskDetails from "../pages/DashBoard/Home/WorkerHome/TaskDetails";
import WithDraw from "../pages/DashBoard/Home/WorkerHome/WithDraw";
import ReviewATask from "../pages/DashBoard/Home/TaskCreatorMenu/ReviewATask";
import ApprovedSubmission from "../pages/DashBoard/Home/WorkerHome/ApprovedSubmission";
import WithDrawRequest from "../pages/DashBoard/Home/AdminHome/WithDrawRequest";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute>
            <DashBoardLayout />
        </PrivateRoute>,
        errorElement: <h2 className="text-6xl">404</h2>,
        children: [
            // a worker routes 
            {
                index: true,
                element: <PrivateRoute>
                    <DashBoardHome />
                </PrivateRoute>,
            },
            {
                path: 'approved-submission',
                element: <PrivateRoute>
                    <ApprovedSubmission />
                </PrivateRoute>
            },
            {
                path: "task-list",
                element: <PrivateRoute>
                    <TaskList />
                </PrivateRoute>
            },
            {
                path: "task-details/:id",
                element: <PrivateRoute>
                    <TaskDetails />
                </PrivateRoute>
            },
            {
                path: 'my-submission',
                element: <PrivateRoute>
                    <Mysubmission />
                </PrivateRoute>
            },
            {
                path: 'withDraw',
                element: <PrivateRoute>
                    <WithDraw />
                </PrivateRoute>
            },

            // task creator routes 
            {
                path: 'add-task',
                element: <AddTask />,
            },
            {
                path: 'reviewTask',
                element: <ReviewATask />
            },
            {
                path: 'my-task',
                element: <MyTasks />,
            },
            {
                path: "update/my-task/:id",
                element: <UpdateMyTask />,
                loader: ({ params }) => fetch(`http://localhost:5000/task/${params.id}`)
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
                path: 'withdrawRequest',
                element: <WithDrawRequest />
            },
            {
                path: 'manage-tasks',
                element: <ManageTasks />
            },
        ]

    }


])