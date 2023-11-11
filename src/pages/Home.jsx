import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLuggageCart,
  faSearch,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  useGetAllCountryQuery,
  useGetCitiesByCountryQuery,
} from "../redux/api/apiSlice";
import Loader from "../components/global/Loader";

const Home = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const { data, isLoading } = useGetAllCountryQuery();
  const { data: citiesData } = useGetCitiesByCountryQuery({
    countryId: selectedCountry,
  });
  const navigate = useNavigate();
  if (isLoading) {
    return <Loader />;
  }
  const countries = data?.data || [];
  const cities = citiesData?.data || [];
  const handleSearchClick = () => {
    navigate("/tours-list");
  };
  const handleSelectCountry = (e) => {
    setSelectedCountry(e.target.value);
  };
  return (
    <div style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}>
      {/* <!-- search banner starts --> */}
      <section className="search-banner d-flex align-items-center pt-10 pb-10">
        <div className="container">
          <div className="search-banner-in">
            <div className="row align-items-center">
              <div className="col-lg-12 mb-10 text-center">
                <img
                  src="/trslogo.png"
                  alt="image"
                  className="bg-white rounded p-4 box-shadow"
                  style={{ width: "180px" }}
                />
              </div>
              <div className="col-lg-6 pe-4 mb-4">
                <div className="section-title mb-5 text-lg-start text-center">
                  <h4 className="white text-uppercase">
                    Are you ready to travel
                  </h4>
                  <h1 className="text-uppercase white">
                    ultimate travel <span className="theme1">tour booking</span>
                  </h1>
                </div>
                <div className="trending-topic-main">
                  <div className="tab-content ">
                    {/* <!-- tour posts --> */}
                    <div
                      aria-labelledby="tour-tab"
                      className="tab-pane fade active show"
                      id="tour"
                    >
                      <div className="book-form">
                        <div className="row d-flex align-items-center justify-content-between">
                          <div className="col-lg-6 mb-2">
                            <div className="form-group">
                              <div className="input-box">
                                <label className="white">Country</label>
                                <select
                                  className="select-box "
                                  onChange={handleSelectCountry}
                                >
                                  <option value="" selected disabled>
                                    Select Country
                                  </option>
                                  {countries?.map((country) => (
                                    <option
                                      key={country?.id}
                                      value={country?.id}
                                    >
                                      {country?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 mb-2">
                            <div className="form-group">
                              <div className="input-box">
                                <label className="white">City</label>
                                <select className="niceSelect">
                                  <option value="" selected disabled>
                                    Select City
                                  </option>
                                  {cities?.map((city) => (
                                    <option key={city?.id} value={city?.id}>
                                      {city?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group mb-0 text-center">
                              <button
                                onClick={handleSearchClick}
                                className="nir-btn mt-4"
                              >
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  className="mr-2"
                                />{" "}
                                Search Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 ps-4 mb-4">
                <div className="search-banner-list">
                  <div className="search-banner-item d-flex align-items-center border-b mb-4 pb-4">
                    <FontAwesomeIcon
                      icon={faUmbrellaBeach}
                      className="fas fa-umbrella-beach p-4 rounded bg-theme lh-base white fs-1"
                    />
                    <div className="search-banner-item-ctn ms-4 w-75">
                      <h3 className="theme1">Many Choices</h3>
                      <p className="mb-0 white">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>

                  <div className="search-banner-item d-flex align-items-center border-b mb-4 pb-4">
                    <FontAwesomeIcon
                      icon={faLuggageCart}
                      className="fas fa-luggage-cart p-4 rounded bg-theme lh-base white fs-1"
                    />
                    <div className="search-banner-item-ctn ms-4 w-75">
                      <h3 className="theme1">Pick Up & Go</h3>
                      <p className="mb-0 white">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>
                  <div className="search-banner-item d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className="fas fa-umbrella-beach p-4 rounded bg-theme lh-base white fs-1"
                    />
                    <div className="search-banner-item-ctn ms-4 w-75">
                      <h3 className="theme1">Best Prices</h3>
                      <p className="mb-0 white">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dot-overlay"></div>
        <div id="particles-js" className="zindex3"></div>
      </section>
      {/* <!-- search banner Ends --> */}

      {/* <!-- footer starts --> */}
      <div className="footer-copyright bg-title">
        <div className="container">
          <div className="copyright-inner rounded pt-3 d-md-flex align-items-center justify-content-between text-center">
            <div className="copyright-text mb-3">
              <p className="m-0 white">2022 Travelin. All rights reserved.</p>
            </div>
            <div className="social-links mb-3">
              <ul>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                      fill="#fff"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      fill="#fff"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer ends --> */}
    </div>
  );
};

export default Home;
