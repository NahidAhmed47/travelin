import React from "react";
import PageBanner from "../components/common/PageBanner";
import ExploreYourLife from "../components/common/ExploreYourLife";
import OurPartners from "../components/common/OurPartners";
import TourDayCollapse from "../components/TourDayCollapse";
import BlogCmntBox from "../components/BlogCmntBox";
import MakeBookingCntn from "../components/MakeBookingCntn";
import { useParams } from "react-router-dom";
import { useGetSingleTourQuery } from "../redux/api/apiSlice";
import Loader from "../components/global/Loader";

const TourDetails = () => {
  const tourId = useParams()?.id;
  const { data, isLoading } = useGetSingleTourQuery({ tourId });
  if (isLoading) return <Loader />;
  const tour = data?.data;
  const { description_en = "", id, title_en, duration, max_guests_no } = tour;
  return (
    <div>
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}
      >
        <PageBanner path={"Tour Single"} />
      </section>
      <div className="">
        <section className="trending pt-6 pb-0 bg-lgrey">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-content">
                  <div className="single-full-title border-b mb-2 pb-2">
                    <div className="single-title">
                      <h2 className="mb-1">{title_en}</h2>
                      <div className="rating-main d-lg-flex align-items-center text-lg-start text-center">
                        <p className="mb-0 me-2">
                          <i className="icon-location-pin"></i> Greater London,
                          United Kingdom
                        </p>
                        <div className="rating me-2">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <span>(1,186 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-4 overflow-hidden rounded">
                    <div className=" position-relative">
                      <div className="  overflow-hidden rounded">
                        <div>
                          <img
                            src="/images/trending/trending1.jpg"
                            alt="1"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="single-tour-img-slider rounded overflow-hidden">
                        <div className="single-tour-img-single-div">
                          <img
                            src="/images/trending/trending1.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                        <div className="single-tour-img-single-div">
                          <img
                            src="/images/trending/trending2.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                        <div className="single-tour-img-single-div">
                          <img
                            src="/images/trending/trending3.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                        <div>
                          <img
                            src="/images/trending/trending5.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                        <div>
                          <img
                            src="/images/trending/trending6.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                        <div>
                          <img
                            src="/images/trending/trending7.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                        <div>
                          <img
                            src="/images/trending/trending7.jpg"
                            alt="1"
                            className="rounded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="description mb-2">
                    <h4>Description</h4>
                    <div
                      id="description-field"
                      style={{
                        width: "100%",
                      }}
                      dangerouslySetInnerHTML={{ __html: description_en }}
                    ></div>
                    {/* <p className="mb-0">
                      The passage is attributed to an unknown typesetter in the
                      15th century who is thought to have scrambled parts of
                      Cicero&apos;s De Finibus Bonorum et Malorum for use in a
                      type specimen book.
                    </p> */}
                  </div>

                  <div className="tour-includes mb-4">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <i
                              className="fa fa-clock-o pink mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            {duration} Days
                          </td>
                          <td>
                            <i
                              className="fa fa-group pink mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Max People : {max_guests_no}
                          </td>
                          <td>
                            <i
                              className="fa fa-calendar pink mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Jan 18 - Dec 21
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i
                              className="fa fa-user pink mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Min Age : 10+
                          </td>
                          <td>
                            <i
                              className="fa fa-map-signs pink mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Pickup : Airport
                          </td>
                          <td>
                            <i
                              className="fa fa-file-alt pink mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Langauge - English, Thai
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="description mb-2">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 mb-2">
                        <div className="desc-box bg-grey p-4 rounded">
                          <h5 className="mb-2">Departure & Return Location</h5>
                          <p className="mb-0">
                            John F.K. International Airport(Google Map)
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-2">
                        <div className="desc-box bg-grey p-4 rounded">
                          <h5 className="mb-2">Bedroom</h5>
                          <p className="mb-0">4 Bedrooms</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-2">
                        <div className="desc-box bg-grey p-4 rounded">
                          <h5 className="mb-2">Departure Time</h5>
                          <p className="mb-0">3 Hours Before Flight Time</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-2">
                        <div className="desc-box bg-grey p-4 rounded">
                          <h5 className="mb-2">Departure Time</h5>
                          <p className="mb-0">3 Hours Before Flight Time</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-2">
                        <div className="desc-box bg-grey p-4 rounded">
                          <h5 className="mb-2">Price Includes</h5>
                          <ul>
                            <li className="d-block pb-1">
                              <i className="fa fa-check pink mr-1"></i> Air
                              Fares
                            </li>
                            <li className="d-block pb-1">
                              <i className="fa fa-check pink mr-1"></i> 3 Nights
                              Hotel Accomodation
                            </li>
                            <li className="d-block pb-1">
                              <i className="fa fa-check pink mr-1"></i> Tour
                              Guide
                            </li>
                            <li className="d-block">
                              <i className="fa fa-check pink mr-1"></i> Entrance
                              Fees
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-2">
                        <div className="desc-box bg-grey p-4 rounded">
                          <h5 className="mb-2">Departure & Return Location</h5>
                          <ul>
                            <li className="d-block pb-1">
                              <i className="fa fa-close pink mr-1"></i> Guide
                              Service Fee
                            </li>
                            <li className="d-block pb-1">
                              <i className="fa fa-close pink mr-1"></i> Driver
                              Service Fee
                            </li>
                            <li className="d-block pb-1">
                              <i className="fa fa-close pink mr-1"></i> Any
                              Private Expenses
                            </li>
                            <li className="d-block">
                              <i className="fa fa-close pink mr-1"></i> Room
                              Service Fees
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="description mb-4">
                    <h4>What to Expect</h4>
                    <p>
                      Lorem ipsum, or lipsum as it is sometimes known, is dummy
                      text used in laying out print, graphic or web designs. The
                      passage is attributed to an unknown typesetter in the 15th
                      century who is thought to have scrambled parts of
                      Cicero&apos;s De Finibus Bonorum et Malorum for use in a
                      type specimen book.Lorem ipsum, or lipsum as it is
                      sometimes known, is dummy text used in laying out print,
                      graphic or web designs.
                    </p>
                    <p className="mb-0">
                      The passage is attributed to an unknown typesetter in the
                      15th century who is thought to have scrambled parts of
                      Cicero&apos;s De Finibus Bonorum et Malorum for use in a
                      type specimen book.
                    </p>
                  </div>

                  <TourDayCollapse />

                  <div className="single-map mb-4">
                    <h4>Map</h4>
                    <div className="map rounded overflow-hidden">
                      <div style={{ width: "100%" }}>
                        <iframe
                          className=" rounded overflow-hidden"
                          height="400"
                          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(mangal%20bazar)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div className="single-review mb-4">
                    <h4>Average Reviews</h4>
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-4 col-md-4">
                        <div className="review-box bg-title text-center py-4 p-2 rounded">
                          <h2 className="mb-1 white">
                            <span>2.2</span>/5
                          </h2>
                          <h4 className="white mb-1">
                            &apos;Feel so much worst than thinking&apos;
                          </h4>
                          <p className="mb-0 white font-italic">
                            From 40 Reviews
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8">
                        <div className="review-progress">
                          <div className="progress-item mb-1">
                            <p className="mb-0">Cleanliness</p>
                            <div className="progress rounded">
                              <div
                                className="progress-bar bg-theme"
                                role="progressbar"
                                aria-valuenow="40"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "40%" }}
                              >
                                <span className="sr-only">40% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="progress-item mb-1">
                            <p className="mb-0">Facilities</p>
                            <div className="progress rounded">
                              <div
                                className="progress-bar bg-theme"
                                role="progressbar"
                                aria-valuenow="30"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "30%" }}
                              >
                                <span className="sr-only">30% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="progress-item mb-1">
                            <p className="mb-0">Value for money</p>
                            <div className="progress rounded">
                              <div
                                className="progress-bar bg-theme"
                                role="progressbar"
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "60%" }}
                              >
                                <span className="sr-only">60% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="progress-item mb-1">
                            <p className="mb-0">Service</p>
                            <div className="progress rounded">
                              <div
                                className="progress-bar bg-theme"
                                role="progressbar"
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "20%" }}
                              >
                                <span className="sr-only">20% Complete</span>
                              </div>
                            </div>
                          </div>
                          <div className="progress-item">
                            <p className="mb-0">Location</p>
                            <div className="progress rounded">
                              <div
                                className="progress-bar bg-theme"
                                role="progressbar"
                                aria-valuenow="45"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "45%" }}
                              >
                                <span className="sr-only">45% Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- blog comment list --> */}
                  <div className="single-comments single-box mb-4">
                    <h5 className="border-b pb-2 mb-2">
                      Showing 16 verified guest comments
                    </h5>
                    <BlogCmntBox />
                    <BlogCmntBox />
                  </div>

                  {/* <!-- blog review --> */}
                  <div className="single-add-review">
                    <h4>Write a Review</h4>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <input type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <textarea>Comment</textarea>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-btn">
                            <a href="#" className="nir-btn">
                              Submit Review
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <MakeBookingCntn tour={tour} />
            </div>
          </div>
        </section>
        {/* <!-- top Destination ends --> */}

        {/* <!-- Discount action starts --> */}
        <ExploreYourLife />
        {/* <!-- Discount action Ends --> */}
        <OurPartners />
      </div>
    </div>
  );
};

export default TourDetails;
