import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import TourGridCard from "../components/TourGridCard";
import categories from "../fake-data/categories";
import durationType from "../fake-data/durationType";
import TourListCard from "../components/TourListCard";
import ExploreYourLife from "../components/common/ExploreYourLife";
import OurPartners from "../components/common/OurPartners";
import RelatedDesCard from "../components/RelatedDesCard";
import { useGetAllTourListQuery } from "../redux/api/apiSlice";
import Loader from "../components/global/Loader";
import { useSelector } from "react-redux";

const ToursList = () => {
  const [listViewOpen, setListViewOpen] = useState(false);
  const { countryId, cityId } = useSelector((state) => state.search);
  const { data, isLoading } = useGetAllTourListQuery({ countryId, cityId });
  if (isLoading) return <Loader />;
  console.log(data?.data);
  return (
    <div>
      {/* <!-- BreadCrumb Starts -->   */}
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}
      >
        <PageBanner path={"Tour Grid"} />
      </section>
      {/* <!-- BreadCrumb Ends -->  */}

      {/* <!-- top Destination starts --> */}
      <section className="trending pt-6 pb-0 bg-lgrey">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-8">
              <div className="list-results d-flex align-items-center justify-content-between">
                <div className="list-results-sort">
                  <p className="m-0">Showing 1-5 of 80 results</p>
                </div>
                <div className="click-menu d-flex align-items-center justify-content-between">
                  <div
                    onClick={() => setListViewOpen(true)}
                    className={`change-grid  me-2 ${
                      listViewOpen && "f-active"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <i className="fa fa-bars rounded"></i>
                    </div>
                  </div>
                  <div
                    onClick={() => setListViewOpen(false)}
                    className={`change-grid  me-2 ${
                      listViewOpen || "f-active"
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <div>
                      <i className="fa fa-th rounded"></i>
                    </div>
                  </div>
                  <div className="sortby d-flex align-items-center justify-content-between ml-2">
                    <select className="niceSelect">
                      <option value="1">Sort By</option>
                      <option value="2">Average rating</option>
                      <option value="3">Price: low to high</option>
                      <option value="4">Price: high to low</option>
                    </select>
                  </div>
                </div>
              </div>

              {listViewOpen || (
                <div className="row">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <TourGridCard key={index} />
                  ))}
                  <div className="col-lg-12">
                    <div className="text-center">
                      <a href="#" className="nir-btn">
                        Load More <i className="fa fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {listViewOpen && (
                <div className="destination-list">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <TourListCard key={index} />
                  ))}
                  <div className="col-lg-12">
                    <div className="text-center">
                      <a href="#" className="nir-btn">
                        Load More <i className="fa fa-long-arrow-alt-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-4 pe-lg-4">
              <div className="sidebar-sticky">
                <div className="list-sidebar">
                  <div className="sidebar-item mb-4">
                    <h3 className="">Categories Type</h3>
                    <ul className="sidebar-category1">
                      {categories?.map((category, index) => (
                        <li key={index}>
                          <input type="checkbox" /> {category?.name}
                          <span className="float-end">
                            {category?.totalItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sidebar-item mb-4">
                    <h3 className="">Duration Type</h3>
                    <ul className="sidebar-category1">
                      {durationType?.map((duration, index) => (
                        <li key={index}>
                          <input type="checkbox" /> {duration?.time}
                          <span className="float-end">
                            {duration?.totalItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sidebar-item mb-4">
                    <h3 className="">Duration Type</h3>
                    <div className="range-slider mt-0">
                      <p className="text-start mb-2">Price Range</p>
                      <div
                        data-min="0"
                        data-max="2000"
                        data-unit="$"
                        data-min-name="min_price"
                        data-max-name="max_price"
                        className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                        aria-disabled="false"
                      >
                        <span className="min-value">0 $</span>
                        <span className="max-value">20000 $</span>
                        <div
                          className="ui-slider-range ui-widget-header ui-corner-all full"
                          style={{ left: "0%", width: "100%" }}
                        ></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>

                  <div className="sidebar-item">
                    <h3>Related Destinations</h3>
                    <div className="sidebar-destination ">
                      <div className="row about-slider related-destination-slider">
                        <RelatedDesCard />
                        <RelatedDesCard />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- top Destination ends --> */}

      {/* <!-- Discount action starts --> */}
      <ExploreYourLife />
      {/* <!-- Discount action Ends --> */}

      {/* <!-- partner starts --> */}
      <OurPartners />
      {/* <!-- partner ends --> */}
    </div>
  );
};

export default ToursList;
