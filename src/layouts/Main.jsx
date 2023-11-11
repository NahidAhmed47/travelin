import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BackBtn from "../components/common/BackBtn";

const Main = () => {
  const path = useLocation()?.pathname;
  return (
    <div>
      {path === "/" ? null : <Header />}
      <Outlet />
      {path === "/" ? null : <Footer />}
      <BackBtn />
    </div>
  );
};

export default Main;
