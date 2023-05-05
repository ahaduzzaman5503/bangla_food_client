import React, { useContext } from "react";
import ActiveLink from "../../pages/ActiveLink/ActiveLink";
import { space } from "postcss/lib/list";
import { AuthContex } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContex);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* mobile */}
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/blog">Blog</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/about">About</ActiveLink>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Bangla Food
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About</ActiveLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {/* <li>
              <a href="/register">Register</a>
            </li> */}

            {user ? (
              <div className="flex items-center justify-center gap-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div title={user.displayName} className="w-10 rounded-full">
                    {user?.photoURL &&  <img src={user?.photoURL} alt="pic" /> }
                  </div>
                </label>
                <button onClick={handleLogOut} className="btn btn-primary">
                  SignOut
                </button>
              </div>
            ) : (
              <li>
                <button   className="btn btn-primary">
                <a href="/login">login</a>
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
