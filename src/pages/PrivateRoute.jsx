import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  //   connecté
  if (token) {
    return children;
  }
  //   non connecté
  return <Navigate to={"/login"} replace state={{ path: location.pathname }} />;
};

export default PrivateRoute;
