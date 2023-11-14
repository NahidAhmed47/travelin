import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TourGridCard = ({ tour }) => {
  const { id, title, price, duration, description, images } = tour;
  console.log(tour);
  const { lngMode } = useSelector((state) => state.lngMode);
  const navigate = useNavigate();
  const handleTourDetails = (id) => {
    navigate(`/tours-list/details/${id}`);
  };
  return (
    <div
      onClick={() => handleTourDetails(id)}
      className="col-lg-6 col-md-6 mb-4"
      style={{ cursor: "pointer" }}
    >
      <div className="trend-item rounded box-shadow">
        <div className="trend-image position-relative">
          <img
            src={"/images/trending/trending2.jpg"}
            alt="image"
            className=""
          />
          <div className="color-overlay"></div>
        </div>
        <div className="trend-content p-4 pt-5 position-relative">
          <div className="trend-meta bg-theme white px-3 py-2 rounded">
            <div className="entry-author">
              <i className="icon-calendar"></i>
              <span className="fw-bold">
                {" "}
                {duration} {lngMode == "en" ? "Days Tours" : "جولات الأيام"}
              </span>
            </div>
          </div>
          <h5 className="theme mb-1">
            <i className="flaticon-location-pin"></i> Croatia
          </h5>
          <h3 className="mb-1">{title}</h3>
          <div className="rating-main d-flex align-items-center pb-2">
            <div className="rating">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
            <span className="ms-2">(12)</span>
          </div>
          <div
            className=" border-b pb-2 mb-2"
            id="description-field"
            style={{ maxHeight: "100px", overflow: "hidden", width: "100%" }}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <div className="entry-meta">
            <div className="entry-author d-flex align-items-center">
              <p className="mb-0">
                <span className="theme fw-bold fs-5">
                  {" "}
                  ${Number.isInteger(price) ? price + ".00" : price}
                </span>{" "}
                | {lngMode == "en" ? "Per Person" : "للشخص الواحد"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGridCard;
