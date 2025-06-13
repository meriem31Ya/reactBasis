import React, { useEffect, useState } from "react";

const useLogicApp = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("access_token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return [token, setToken];
};

export default useLogicApp;
