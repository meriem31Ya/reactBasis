import React from "react";
import Linkto from "./Linkto";

const Navbar = () => {
  return (
    <nav className="flex space-x-4">
      <Linkto name={"Acceuil"} lien={"/"} />
      <Linkto name={"About"} lien={"/about"} />
      <Linkto name={"Contact"} lien={"/contact"} />
    </nav>
  );
};

export default Navbar;
