import React from "react";

const Box = ({ children, btn }) => {
  console.log(btn);
  return (
    <div className="bg-gray-100  border border-gray-300 rounded ">
      {/* des button, des paragraphes  */}

      {children}

      <h1>ceci est ma box, mettez ce que vous souhaitez </h1>
    </div>
  );
};

export default Box;
