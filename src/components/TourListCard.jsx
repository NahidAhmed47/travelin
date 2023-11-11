import React from "react";

const TourListCard = () => {
  return (
    <div className="trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4">
      <div className="row">
        <div className="col-lg-4 col-md-3">
          <div className="trend-item2 rounded">
            <a
              href="tour-single.html"
              style={{backgroundImage: "url(/images/destination/destination17.jpg)"}}
            ></a>
            <div className="color-overlay"></div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="trend-content position-relative text-md-start text-center">
            <small>6+ Hours | Full Day Tours</small>
            <h3 className="mb-1">
              <a href="tour-single.html">Leeds Castle, Cliffs Of Dover</a>
            </h3>
            <h6 className="theme mb-0">
              <i className="icon-location-pin"></i> Croatia
            </h6>
            <p className="mt-4 mb-0">
              Taking Safety Measures <br />
              <a href="#">
                <span className="theme"> Free cancellation</span>
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="trend-content text-md-end text-center">
            <div className="rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <small>200 Reviews</small>
            <div className="trend-price my-2">
              <span className="mb-0">From</span>
              <h3 className="mb-0">$125</h3>
              <small>Per Adult</small>
            </div>
            <a href="tour-single.html" className="nir-btn">
              View Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListCard;
