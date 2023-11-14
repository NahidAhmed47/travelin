import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";
import Swal from "sweetalert2";
import LngMode from "./LngMode";
import headerContent from "../../web-content/header";

const Header = () => {
  const [token, setToken] = useState(null);
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lngMode } = useSelector((state) => state.lngMode);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = Cookies.get("access_token_web_tours");
    setToken(token);
  }, [user]);
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // handle logout
  const handleLogOut = () => {
    Cookies.remove("access_token_web_tours");
    localStorage.removeItem("user");
    dispatch(setUser(null));
    Swal.fire({
      icon: "success",
      title: "Logout Success!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  // header content
  const { subNav, nav } = headerContent;
  console.log(nav);
  return (
    <header className="main_header_area">
      <div
        className="header-content py-1   bg-theme"
        style={{ zIndex: 9999999 }}
      >
        <div className="container d-flex align-items-center justify-content-between ">
          <ul className="h-100 m-0">
            <li className="">
              <a href="#" className="white">
                <FontAwesomeIcon icon={faCalendarDays} />{" "}
                {lngMode == "en" ? subNav?.date?.en : subNav?.date?.ar}
              </a>
            </li>
            <li>
              <a href="#" className="white">
                <FontAwesomeIcon icon={faLocationDot} />{" "}
                {lngMode == "en" ? subNav?.location?.en : subNav?.location?.ar}
              </a>
            </li>
            <li>
              <a href="#" className="white">
                <FontAwesomeIcon icon={faClock} />{" "}
                {lngMode == "en" ? subNav?.OpenTime?.en : subNav?.OpenTime?.ar}
              </a>
            </li>
          </ul>
          <ul className="m-0 float-right">
            <li>
              <LngMode />
            </li>
            <li>
              <a href="#" className="white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                  fill="#fff"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  fill="#fff"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  fill="#fff"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Navigation Bar --> */}
      <div className="header_menu" id="header_menu">
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 py-2">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <div className="navbar-header">
                <Link to={"/"} className="navbar-brand">
                  <img
                    src="/trslogo.png"
                    alt="image"
                    style={{ width: "70px" }}
                  />
                </Link>
              </div>
              {currentWidth > 990 && (
                <>
                  <div className="nav-menu-container">
                    <div className="nav-menu-item">
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-menu-item-active"
                            : "nav-menu-item-unactive"
                        }
                      >
                        {lngMode == "en" ? nav?.home?.en : nav?.home?.ar}
                      </NavLink>
                    </div>
                    <div className="nav-menu-item">
                      <NavLink
                        to={"/tours-list"}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-menu-item-active"
                            : "nav-menu-item-unactive"
                        }
                      >
                        {lngMode == "en"
                          ? nav?.tours_list?.en
                          : nav?.tours_list?.ar}
                      </NavLink>
                    </div>
                    {token && (
                      <div className="nav-menu-item">
                        <NavLink
                          to={"/cart"}
                          className={({ isActive }) =>
                            isActive
                              ? "nav-menu-item-active"
                              : "nav-menu-item-unactive"
                          }
                        >
                          {lngMode == "en"
                            ? nav?.my_cart?.en
                            : nav?.my_cart?.ar}
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div className="register-login d-flex align-items-center">
                    {token ? (
                      <div
                        onClick={handleLogOut}
                        className="nav-menu-login me-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          fill="#777"
                        >
                          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>{" "}
                        {lngMode == "en" ? nav?.logout?.en : nav?.logout?.ar}
                      </div>
                    ) : (
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive
                            ? "me-3 nav-menu-item-active nav-menu-login"
                            : "nav-menu-login me-3"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          fill="#777"
                        >
                          <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                        </svg>{" "}
                        {lngMode == "en"
                          ? nav?.login_register?.en
                          : nav?.login_register?.ar}
                      </NavLink>
                    )}
                    <Link to="/" className="nir-btn white book-now-btn">
                      {lngMode == "en" ? nav?.book_now?.en : nav?.book_now?.ar}
                    </Link>
                  </div>
                </>
              )}
              {/* menu bar icon */}

              {currentWidth < 990 && menuOpen && (
                <div className="menu-container-mobile">
                  <div
                    onClick={() => setMenuOpen(false)}
                    className="nav-menu-container-mobile"
                  >
                    <div className="nav-menu-item-mobile">
                      <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-menu-item-active"
                            : "nav-menu-item-unactive"
                        }
                      >
                        Home
                      </NavLink>
                    </div>
                    <div className="nav-menu-item-mobile">
                      <NavLink
                        to={"/tours-list"}
                        className={({ isActive }) =>
                          isActive
                            ? "nav-menu-item-active"
                            : "nav-menu-item-unactive"
                        }
                      >
                        Tours List
                      </NavLink>
                    </div>
                    {token && (
                      <div className="nav-menu-item">
                        <NavLink
                          to={"/cart"}
                          className={({ isActive }) =>
                            isActive
                              ? "nav-menu-item-active"
                              : "nav-menu-item-unactive"
                          }
                        >
                          My Cart
                        </NavLink>
                      </div>
                    )}
                    <div className="register-login-mobile">
                      {token ? (
                        <div
                          onClick={handleLogOut}
                          className="nav-menu-login me-3"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                            fill="#777"
                          >
                            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                          </svg>{" "}
                          LogOut
                        </div>
                      ) : (
                        <NavLink
                          to={"/login"}
                          className={({ isActive }) =>
                            isActive
                              ? "me-3 nav-menu-item-active nav-menu-login"
                              : "nav-menu-login me-3"
                          }
                        >
                          Login/Register
                        </NavLink>
                      )}
                      <Link to="/" className="nir-btn white book-now-btn mt-3">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {/* <div id="slicknav-mobile"></div> */}
              {menuOpen
                ? currentWidth < 990 && (
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </div>
                  )
                : currentWidth < 990 && (
                    <div onClick={() => setMenuOpen(!menuOpen)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em"
                        viewBox="0 0 448 512"
                        fill="#777"
                      >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                      </svg>
                    </div>
                  )}
            </div>
          </div>
          {/* <!-- /.container-fluid -->  */}
        </nav>
      </div>
      {/* <!-- Navigation Bar Ends --> */}
    </header>
  );
};

export default Header;
