import React from "react";

function LoginNavbar() {
  return (
    <nav className={`fixed w-full`}>
      <NavbarList />
    </nav>
  );
}

const NavbarList = () => {
  return (
    <ul className={`flex justify-between pr-10 pl-10 pt-1`}>
      <li>
        <h2 className={`text-2xl font-extrabold text-gray-800`}>
          ATools<span className={`text-orange-500`}>.</span>
        </h2>
      </li>
      <li className={`md:block hidden`}>
        <div className={`flex gap-2`}>
          <button
            className={`bg-gray-800 text-white pl-12 pr-12 pt-3 pb-3 font-semibold hover:bg-white hover:text-gray-800 border-2 border-gray-800 transition-all`}
          >
            Start Free Trial
          </button>
          <button
            className={`bg-orange-500 text-white pl-12 pr-12 pt-3 pb-3 font-semibold hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition-all`}
          >
            Login
          </button>
        </div>
      </li>
    </ul>
  );
};

export default LoginNavbar;
