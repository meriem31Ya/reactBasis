import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src="/logo.png" alt="Logo" className="w-10 h-10" />
      <a href="/" className="text-xl font-bold text-gray-800">
        Nom du site
      </a>
    </div>
  );
};

export default Logo;
