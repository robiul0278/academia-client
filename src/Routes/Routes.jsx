import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/UsersLoginRagister/Login";
import Register from "../Pages/UsersLoginRagister/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";
import Courses from "../Pages/Courses/Courses";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/UserDashboard/MyCart";
import MyCourses from "../Pages/InstructorDashboard/MyCourses";
import AddCourse from "../Pages/InstructorDashboard/AddCourse";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers";
import ManageCourse from "../Pages/AdminDashboard/ManageCourse";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            }, 
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/instructor",
                element: <Instructors></Instructors>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            }
        ]
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },

            // instrtuctor dashboard 
            {
                path: 'addcourse',
                element: <AddCourse></AddCourse>
            },
            {
                path: 'mycourse',
                element: <MyCourses></MyCourses>
            },

            // admin dashboard 
            {
                path: 'managecourse',
                element: <ManageCourse></ManageCourse>
            },
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    }
]);

export default router;