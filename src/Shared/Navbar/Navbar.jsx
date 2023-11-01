import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo/book.png';
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./Navbar.css"


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [role, setRole] = useState([]);

  console.log(role)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(`https://summer-camp-server-seven-pink.vercel.app/role/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRole(data.role);
      })
  }, [user?.email])

  const DashboardLink = () => {
    if (role === "admin") {
      return (
        <NavLink to="/dashboard/manageCourse">Dashboard</NavLink>
      );
    } else if (role === "instructor") {
      return (
        <NavLink to="/dashboard/addCourse">Dashboard</NavLink>
      );
    } else {
      return (
        <NavLink to="/dashboard/myCart">Dashboard</NavLink>

      )
    }
  };

  const navItems = (
    <>
      <NavLink to="/" className={"px-4 py-1 navText font-semibold rounded mr-4"}
        activeClassName="active">Home</NavLink>
      <NavLink to="/instructor" className={"px-4 py-1 navText font-semibold rounded mr-4"}
        activeClassName="active">Instructors</NavLink>
      <NavLink to="/courses" className={"px-4 py-1 navText font-semibold rounded mr-4"}
        activeClassName="active">Courses</NavLink>
      {user ? (
        <>
          <Link className={"px-4 py-1 navText font-semibold rounded mr-4"}>
            {DashboardLink()}
          </Link>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <section className="z-10 bg-white w-full shadow-md top-0 sticky">
      <div className="max-w-[1280px]  mx-auto bg-inherit py-2 px-3 lg:flex justify-between items-center navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 -mt-3"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-black w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="flex text-xl justify-start items-center ms-2">
            <img className="md:w-7 w-5 mr-1" src={logo} alt="" />
            <h1 className="logos">ACADEMIA</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-black font-semibold menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end flex items-center mr-5">
          {user ? (
            <div className="dropdown dropdown-bottom dropdown-end ">
              <label tabIndex={0} className=" m-1">
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-green-500  ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </label>
              <ul tabIndex={0} className="menu-sm menu z-[1]  text-black bg-white dropdown-content mt-3 shadow rounded-box w-52">
                <div className="card-body items-center text-center">
                  <img src={user?.photoURL} alt="avatar"
                    className="rounded-full" style={{ width: '70px' }} />
                  <h5 className="">{user?.displayName}</h5>
                </div>
                <li><NavLink onClick={handleLogOut}> Sign Out</NavLink></li>

              </ul>
            </div>
          ) : (
            <div>
              <NavLink to="/login" className="btn btn-sm text-black login border-2 bg-white border-[#1C7455]">
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;