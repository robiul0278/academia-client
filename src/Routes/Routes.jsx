import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/UsersLoginRegister/Login";
import Register from "../Pages/UsersLoginRegister/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Courses from "../Pages/Courses/Courses";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/UserDashboard/MyCart";
import MyCourses from "../Pages/InstructorDashboard/MyCourses";
import AddCourse from "../Pages/InstructorDashboard/AddCourse";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import ManageCourse from "../Pages/AdminDashboard/ManageCourse";
import Payment from "../Pages/UserDashboard/Payment";
import EnrolledCourse from "../Pages/UserDashboard/EnrolledCourse";
import PaymentHistory from "../Pages/UserDashboard/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/AdminDashboard/AdminHome";
import InstructorHome from "../Pages/InstructorDashboard/InstructorHome"
import Instructors from "../Pages/Instructors/Instructors";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>,
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/courses",
                element: <Courses/>
            },
            {
                path:"instructor",
                element: <Instructors/>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>,
        children: [
            {
                path: 'myCart',
                element: <PrivateRoute><MyCart/></PrivateRoute>
            },
            {
                path: "payment/:id",
                element: <PrivateRoute> <Payment/></PrivateRoute>
            },
            {
                path: "enrolled",
                element: <PrivateRoute><EnrolledCourse/></PrivateRoute>
            },
            {
                path: "paymentHistory",
                element: <PrivateRoute><PaymentHistory/></PrivateRoute>
            },

            // instructor dashboard
            {
                path:'instructorHome',
                element: <PrivateRoute><InstructorHome/></PrivateRoute>
            },
            {
                path: 'addCourse',
                element: <PrivateRoute><AddCourse/></PrivateRoute>
            },
            {
                path: 'myCourses',
                element: <PrivateRoute><MyCourses/></PrivateRoute>
            },

            // admin dashboard 
            {
                path: 'adminHome',
                element: <PrivateRoute><AdminHome/></PrivateRoute>
            },
            {
                path: 'manageCourse',
                element: <PrivateRoute><ManageCourse/></PrivateRoute>
            },
            {
                path: 'manageUsers',
                element: <PrivateRoute><ManageUsers/></PrivateRoute>
            }
        ]
    }
]);

export default router;