import React from "react";
import Linkto from "./Linkto";

const Navbar = () => {
  return (
    <nav className="flex space-x-4">
      <Linkto name={"Accueil"} lien={"/"} />
      <Linkto name={"About"} lien={"/about"} />
      <Linkto name={"Products"} lien={"/products"} />
      <Linkto name={"Contact"} lien={"/contact"} />
    </nav>
  );
};

export default Navbar;
