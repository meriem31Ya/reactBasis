import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import { Navigate } from "react-router";
import { ROLES } from "../constants";

const PublicRoute = ({ children }) => {
  const { token, user } = useContext(AuthContext);

  //   non connecté
  if (!token) {
    return children;
  }
  //   connecté
  return (
    <Navigate
      to={user.role === ROLES.admin ? "/dashboard" : "/"}
      replace
      state={{ path: location.pathname }}
    />
  );
};

export default PublicRoute;
