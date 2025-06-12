import React from "react";
import { Link, NavLink } from "react-router";

const Linkto = ({ name, lien }) => {
  return (
    <>
      {/* <Link to={lien} className="text-gray-600 hover:text-gray-900">
        {name}
      </Link> */}
      <NavLink to={lien} className="text-gray-600 hover:text-gray-900">
        {name}
      </NavLink>
    </>
  );
};

export default Linkto;
