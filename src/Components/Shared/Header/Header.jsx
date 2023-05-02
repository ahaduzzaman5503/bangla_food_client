import React from "react";

const Header = () => {
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
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Chef Recipes</a>
              </li>
            </ul>
          </div>
          <a href='/' className="btn btn-ghost normal-case text-xl">BD Cuisine</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            <li>
              <a href='/chefrecipes'>Chef Recipes</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/login">Login</a>
            </li>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1682967364~exp=1682967964~hmac=e2f24cf0bd7b6ded9503d95267a15ca61d5820b7eb24c71f7c7fa8a52c0a1d36" />
              </div>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
