import React from "react";
import { NavLink, Outlet } from "react-router";

const LayoutDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav>
          <NavLink
            to={"/dashboard"}
            className={"block px-4 py-2 hover:bg-gray-200"}
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/dashboard/userinfos"}
            className={"block px-4 py-2 hover:bg-gray-200"}
          >
            Users
          </NavLink>
          <NavLink
            to={"/dashboard/annonces"}
            className={"block px-4 py-2 hover:bg-gray-200"}
          >
            Annonces
          </NavLink>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
};

export default LayoutDashboard;
