import React, { useContext } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "./Button";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/auth.context";

const Header = () => {
  // declaration function, variable api ect
  let navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const handleClick = (linkTo) => {
    //  traitement
    //  redirection vers page login
    navigate(linkTo);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <Logo />
      <Navbar />
      <div className="flex space-x-2">
        {token ? (
          <Button name="Deconnexion" />
        ) : (
          <>
            <Button name="Connexion" onClick={() => handleClick("/login")} />
            <Button
              name="Inscription"
              onClick={() => handleClick("/signup")}
              style={{
                backgroundColor: "#4CAF50",
              }}
            />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
