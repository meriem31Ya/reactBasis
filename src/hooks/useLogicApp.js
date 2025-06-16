import React, { useEffect, useState } from "react";

const useLogicApp = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // save User from Login

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) {
      setToken(storedToken);
      setUser(storedUser);
    }
  }, []);

  return [token, user, setToken];
};

export default useLogicApp;
