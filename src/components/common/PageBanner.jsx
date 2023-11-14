import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PageBanner = ({ path }) => {
  const { lngMode } = useSelector((state) => state.lngMode);
  return (
    <>
      <div
        className="section-shape section-shape1 top-inherit bottom-0"
        style={{ backgroundImage: "url(/images/shape8.png)" }}
      ></div>
      <div className="breadcrumb-outer">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h1 className="mb-3">{path}</h1>
            <nav
              aria-label="breadcrumb"
              className=""
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
              }}
            >
              <ul className="breadcrumb ">
                <li
                  className="breadcrumb-item"
                  style={{ paddingLeft: `${lngMode == "ar" ? "10px" : "0px"}` }}
                >
                  <Link
                    to={"/"}
                    style={{
                      color: "#242958",
                      fontWeight: "500",
                      fontFamily: "poppins",
                      cursor: "pointer",
                    }}
                  >
                    {lngMode == "en" ? "Home" : "بيت"}
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{
                    fontWeight: "500",
                    fontFamily: "poppins",
                    cursor: "pointer",
                  }}
                >
                  {path}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="dot-overlay"></div>
    </>
  );
};

export default PageBanner;
