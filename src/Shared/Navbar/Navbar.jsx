import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/book.png';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();


  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructor">Instructors</Link>
      </li>

      <li>
        <Link to="/courses">Courses</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to='/dashboard/mycart'>
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <div className="navbar max-w-screen-2xl mx-auto fixed py-5 z-10 bg-opacity-20 text-white bg-emerald-950">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black font-semibold w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img className="w-14 hidden lg:flex" src={logo} alt="" />
          <h1 className="font-bold text-3xl">ACADEMIA</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
      {user ? (
          <div className=" align-middle flex">
            <div>
              <label
                tabIndex={0}
                className="btn mx-4 btn-ghost  btn-circle avatar"
              >
                <div className="rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
            </div>

            <NavLink
              to="/login"
              onClick={handleLogOut}
              className="px-4 btn logout py-1 rounded"
            >
              LogOut
            </NavLink>
          </div>
        ) : (
          <div>
            <NavLink to="/login" className="btn ml-4">
              Login
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;