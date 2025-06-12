import React from "react";
import { Link } from "react-router";

const Linkto = ({ name, lien }) => {
  return (
    <Link to={lien} className="text-gray-600 hover:text-gray-900">
      {name}
    </Link>
  );
};

export default Linkto;
