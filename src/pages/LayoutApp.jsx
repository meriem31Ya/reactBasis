import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";

const LayoutApp = () => {
  return (
    <>
      <Header />
      {/*  children */}
      <Outlet />
    </>
  );
};

export default LayoutApp;
