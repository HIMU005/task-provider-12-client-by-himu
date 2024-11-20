import {
    createBrowserRouter,
} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
import UpdateMyTask from "../pages/DashBoard/Home/TaskCreatorMenu/UpdateMyTask";
import TaskDetails from "../pages/DashBoard/Home/WorkerHome/TaskDetails";
<<<<<<< HEAD
<<<<<<< HEAD
import WithDraw from "../pages/DashBoard/Home/WorkerHome/WithDraw";
import ReviewATask from "../pages/DashBoard/Home/TaskCreatorMenu/ReviewATask";
import ApprovedSubmission from "../pages/DashBoard/Home/WorkerHome/ApprovedSubmission";
<<<<<<< HEAD
<<<<<<< HEAD
import WithDrawRequest from "../pages/DashBoard/Home/AdminHome/WithDrawRequest";
import PrivateRoute from "./PrivateRoute";
<<<<<<< HEAD
<<<<<<< HEAD
import TaskCreatorRoute from "./TaskCreatorRoute";
import AdminRoute from "./AdminRoute";
<<<<<<< HEAD
<<<<<<< HEAD
import About from "../pages/Home/About";
import Profile from "../components/Shared/Profile";
<<<<<<< HEAD
<<<<<<< HEAD
import ErrorPage from "../pages/ErrorPage";
=======
>>>>>>> 5375772 (first commit)
=======
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
import DashBoardLayout from "../Layouts/DashBoardLayout";
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
>>>>>>> 087dfad (set up all home route and dashboard route)
=======
import UpdateMyTask from "../pages/DashBoard/Home/TaskCreatorMenu/UpdateMyTask";
>>>>>>> 48864ca (task update part done)
=======
>>>>>>> 5101158 (task submission done)
=======
import WithDraw from "../pages/DashBoard/Home/WorkerHome/WithDraw";
import ReviewATask from "../pages/DashBoard/Home/TaskCreatorMenu/ReviewATask";
>>>>>>> bf8266c (review a pending task and pay the user)
=======
>>>>>>> 6adfd86 (approved Submission done for worker)
=======
import WithDrawRequest from "../pages/DashBoard/Home/AdminHome/WithDrawRequest";
>>>>>>> 02aa898 (hero section done)
=======
>>>>>>> dd135b8 (secure frontend for worker)
=======
import TaskCreatorRoute from "./TaskCreatorRoute";
>>>>>>> 0f62718 (fixed bug in authprovider)
=======
>>>>>>> a18e3db (secure frontend for admin)
=======
import About from "../pages/Home/About";
>>>>>>> d8d0a65 (implement helmet of dynamic title)
=======
>>>>>>> e0fd6cb (SET UP profile)
=======
import ErrorPage from "../pages/ErrorPage";
>>>>>>> c8b509d (change the logo and title)

export const router = createBrowserRouter([
    {
        path: '/',
<<<<<<< HEAD
<<<<<<< HEAD
        element: <Main />,
        errorElement: <ErrorPage />,
=======
        element: <Main />,
<<<<<<< HEAD
        errorElement: <h3 className="text-5xl">404</h3>,
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
        errorElement: <ErrorPage />,
>>>>>>> c8b509d (change the logo and title)
        children: [
            {
                path: "/",
                element: <Home />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
            },
            {
                path: "/about",
                element: <About />
<<<<<<< HEAD
=======
>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
=======
>>>>>>> d8d0a65 (implement helmet of dynamic title)
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
<<<<<<< HEAD
<<<<<<< HEAD
    },
    {
        path: '/dashBoard',
        element: <PrivateRoute>
            <DashBoardLayout />
        </PrivateRoute>,
        errorElement: <ErrorPage />,
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
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <AddTask />
                        </TaskCreatorRoute>
                    </PrivateRoute>
            },
            {
                path: 'reviewTask',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <ReviewATask />
                        </TaskCreatorRoute>
                    </PrivateRoute>
            },
            {
                path: 'my-task',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <MyTasks />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },
            {
                path: "update/my-task/:id",
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <UpdateMyTask />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },
            {
                path: 'purchase-coin',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <PurchaseCoin />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },
            {
                path: 'payment-history',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <PaymentHistory />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },

            // admin routes 
            {
                path: 'manage-users',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageUser />
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'withdrawRequest',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <WithDrawRequest />
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'manage-tasks',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageTasks />
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'profile',
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
            }
        ]
=======
    },
    {
        path: '/dashBoard',
        element: <PrivateRoute>
            <DashBoardLayout />
        </PrivateRoute>,
        errorElement: <ErrorPage />,
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
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <AddTask />
                        </TaskCreatorRoute>
                    </PrivateRoute>
            },
            {
                path: 'reviewTask',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <ReviewATask />
                        </TaskCreatorRoute>
                    </PrivateRoute>
            },
            {
                path: 'my-task',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <MyTasks />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },
            {
                path: "update/my-task/:id",
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <UpdateMyTask />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },
            {
                path: 'purchase-coin',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <PurchaseCoin />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },
            {
                path: 'payment-history',
                element:
                    <PrivateRoute>
                        <TaskCreatorRoute>
                            <PaymentHistory />
                        </TaskCreatorRoute>
                    </PrivateRoute>,
            },

            // admin routes 
            {
                path: 'manage-users',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageUser />
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'withdrawRequest',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <WithDrawRequest />
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'manage-tasks',
                element:
                    <PrivateRoute>
                        <AdminRoute>
                            <ManageTasks />
                        </AdminRoute>
                    </PrivateRoute>
            },
            {
                path: 'profile',
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
            }
        ]
<<<<<<< HEAD

>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
>>>>>>> c8b509d (change the logo and title)
    }


=======
        element: <h2>Home</h2>
    }
>>>>>>> 5375772 (first commit)
=======
    }


>>>>>>> fafddef (tailwind and daisy setup and basic route done. Now time for a sound sleep. tomorrow is a busy day)
])