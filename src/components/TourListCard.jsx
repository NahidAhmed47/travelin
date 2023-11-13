import React from "react";
import { Link, useNavigate } from "react-router-dom";

const TourListCard = ({ tour }) => {
  const { id, title_en, price, duration, description_en, images } = tour;
  const navigate = useNavigate();
  const handleTourDetails = (id) => {
    navigate(`/tours-list/details/${id}`);
  };
  return (
    <div
      className="trend-full bg-white rounded box-shadow overflow-hidden p-4 mb-4 cursor-pointer"
      onClick={() => handleTourDetails(id)}
    >
      <div className="row">
        <div className="col-lg-4 col-md-3">
          <div className="trend-item2 rounded">
            <a
              href="tour-single.html"
              style={{
                backgroundImage: "url(/images/destination/destination17.jpg)",
              }}
            ></a>
            <div className="color-overlay"></div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="trend-content position-relative text-md-start text-center">
            <small>{duration} Day Tours</small>
            <h3 className="mb-1">{title_en}</h3>
            <h6 className="theme mb-0">
              <i className="icon-location-pin"></i> Croatia
            </h6>
            {/* <p className="mt-4 mb-0">
              Taking Safety Measures <br />
              <a href="#">
                <span className="theme"> Free cancellation</span>
              </a>
            </p> */}
            <div
              className=" mt-4 mb-0"
              id="description-field"
              style={{ maxHeight: "100px", overflow: "hidden", width: "100%" }}
              dangerouslySetInnerHTML={{ __html: description_en }}
            ></div>
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
              <h3 className="mb-0">
                ${Number.isInteger(price) ? price + ".00" : price}
              </h3>
              <small>Per Person</small>
            </div>
            <Link to={`/tours-list/details/${id}`} className="nir-btn">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourListCard;
