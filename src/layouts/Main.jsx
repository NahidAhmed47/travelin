import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import BackBtn from "../components/common/BackBtn";
import { useSelector } from "react-redux";

const Main = () => {
  const path = useLocation()?.pathname;
  const { lngMode } = useSelector((state) => state.lngMode);
  useEffect(() => {
    document.documentElement.lang = lngMode;
    document.documentElement.dir = lngMode === "en" ? "ltr" : "rtl";
    localStorage.setItem("lngMode", lngMode);
  }, [lngMode]);
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
