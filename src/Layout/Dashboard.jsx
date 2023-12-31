import { Link, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome } from "react-icons/fa";
import {

  MdOutlineFoodBank,
  MdMenuOpen,
  MdBook,
  MdManageAccounts,
  MdReviews
} from "react-icons/md";
import useAuth from "../Hooks/useAuth";
import useInstructor from "../Hooks/useInstructor";
import useAdmin from "../Hooks/useAdmin";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // const isAdmin = true;

  return (
    <div>
      <Helmet>
        <title>ACADEMIA | Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side bg-teal-950 text-base-content bg-opacity-20  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu w-80 font-semibold p-4  leading-loose text-white">
            <div className="p-5 font-bold font-serif">
              <h1 className="text-3xl">ACADEMIA</h1>
            </div>
            <div className="">
              <div className="stat bg-white rounded">
                <div className="stat-figure text-secondary">
                  <div className="avatar online">
                    <div className="w-16 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                </div>
                <div className="stat-value text-black text-xl">{user?.displayName}</div>
                <div className="stat-title">Profile</div>
                <div className="stat-desc text-secondary">{user?.email}</div>
              </div>
            </div>

            {
              isAdmin ? <>
                <li>
                  <Link to="/dashboard/managecourse">
                    {" "}
                    <MdBook />
                    Manage Courses
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageusers">
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
                  <Link to="/dashboard/addcourse">
                    {" "}
                    <MdOutlineFoodBank />
                    Add a Course
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mycourses">
                    {" "}
                    <MdMenuOpen />
                    My Courses
                  </Link>
                </li>
              </> : <>

                <li className="mt-10">
                  <Link to="/dashboard/mycart">
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
                  <Link to="/dashboard/paymenthistory">
                    {" "}
                    <MdReviews />
                    Payment History
                  </Link>
                </li>
              </>
            }

            <hr className="border mt-3" />

            <Fade>
            <li>
              <Link to="/">
                {" "}
                <FaHome />
                HOME
              </Link>
            </li>
            <li>
              <Link to="/instructor">
                {" "}
                <MdManageAccounts />
                Instructor
              </Link>
            </li>
            <li>
              <Link to="/courses">
                {" "}
                <MdBook />
                Courses
              </Link>
            </li>
            </Fade>


          </ul>
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};
export default Dashboard;