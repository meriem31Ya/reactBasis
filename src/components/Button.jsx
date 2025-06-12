import React from "react";

const Button = ({ name = "button", ...rest }) => {
  return (
    <button
      className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
      {...rest}
    >
      {name}
    </button>
  );
};

export default Button;
