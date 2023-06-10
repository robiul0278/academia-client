import { Link, Outlet } from "react-router-dom";
import { FaCartPlus, FaHome } from "react-icons/fa";
import {
  // MdPayments,
  // MdDateRange,
  // MdReviews,
  // MdBookmarks,
  // MdMenu,
  // MdShoppingBag,
  // MdContactMail,
  MdOutlineFoodBank,
  MdMenuOpen,
  MdBook,
  MdManageAccounts
} from "react-icons/md";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

  const [isAdmin] = useAdmin();

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open pt-24">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side w-80 bg-yellow-500 text-base-content">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu font-semibold p-4  leading-loose">
            <div className="p-5 font-bold font-serif">
              <h1 className="text-3xl">ACADEMIA</h1>
            </div>

            {
              isAdmin ?
                <>
                  <li>
                    <Link to="/">
                      {" "}
                      <FaHome />
                      ADMIN HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/additem">
                      {" "}
                      <MdOutlineFoodBank />
                      ADD ITEMS
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manageitems">
                      {" "}
                      <MdMenuOpen />
                      MANAGE ITEMS
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      {" "}
                      <MdBook />
                      MANAGE BOOKING
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allusers">
                      {" "}
                      <MdManageAccounts />
                      ALL USERS
                    </Link>
                  </li>
                  <hr className="border m-5" />
                  {/* OR ============ */}
                </> :
                <>
                  <li>
                    <Link to="/">
                      {" "}
                      <FaHome />
                      USER HOME
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/mycart">
                      {" "}
                      <FaCartPlus />
                      My Selected Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      {" "}
                      <MdReviews />
                      My Enrolled Classes
                    </Link>
                  </li>
                </>
            }
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;