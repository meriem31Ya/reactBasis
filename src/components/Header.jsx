import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Button from "./Button";

const Header = () => {
  const isConnected = false;
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <Logo />
      <Navbar />
      <div className="flex space-x-2">
        {isConnected ? (
          <Button name="Deconnexion" />
        ) : (
          <>
            <Button name="Connexion" />
            <Button
              name="Inscription"
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
