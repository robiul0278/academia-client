import useAdmin from '../Hooks/useAdmin';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaCartPlus, FaHome, } from 'react-icons/fa';
import {  MdBook, MdManageAccounts, MdMenuOpen, MdOutlineFoodBank, MdReviews } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // const isAdmin = true;
  console.log(isAdmin, isInstructor)
  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto">
      <Helmet>
        <title>Education | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300 md:hidden">
          <div className="flex-none">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div>
          <div className=" px-2 mx-2">Dashboard</div>

        </div>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {
            isAdmin ? <>
              <li>
                <Link to="/dashboard/manageCourse">
                  {" "}
                  <MdBook />

                  Manage Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers">
                  {" "}
                  <MdManageAccounts />
                  Manage Users
                </Link>
              </li>
            </> : isInstructor ? <>
              <li>
                <Link to="/">
                  {" "}
                  <FaHome />
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addCourse">
                  {" "}
                  <MdOutlineFoodBank />
                  Add a Course
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myCourses">
                  {" "}
                  <MdMenuOpen />
                  My Courses
                </Link>
              </li>
            </> : <>

              <li className="">
                <Link to="/dashboard/myCart">
                  {" "}
                  <FaCartPlus />
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolled">
                  {" "}
                  <MdReviews />
                  My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/paymentHistory">
                  {" "}
                  <MdReviews />
                  Payment History
                </Link>
              </li>
            </>
          }
          <hr />
          <li>
            <NavLink
              to="/"
              className="flex items-center space-x-2 "
            >
              <FaHome />
              <span className="font-bold">Home</span>
            </NavLink>
          </li>
        </ul>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;