import React from "react";
import { useSelector } from "react-redux";

const RelatedDesCard = ({ data }) => {
  const { lngMode } = useSelector((state) => state.lngMode);
  console.log(data);


  return (
    <div  className="col-lg-4 col-md-6 col-sm-6 mb-4 slide w-100">
      <div className="trend-item1">
        <div className="trend-image position-relative rounded">
          <img src="/images/destination/destination17.jpg" alt="image" />
          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
            <div className="trend-content-title">
              <h5 className="mb-0">
                <a href="tour-single.html" className="theme1">
                  Italy
                </a>
              </h5>
              <h4 className="mb-0 white">{data?.name}</h4>
            </div>
            <span className="white bg-theme p-1 px-2 rounded">
              18 {lngMode == "en" ? "Tours" : "جولات"}
            </span>
          </div>
          <div className="color-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default RelatedDesCard;

{
  /* <div className="col-lg-4 col-md-6 col-sm-6 mb-4 w-100">
      <div className="trend-item1">
        <div className="trend-image position-relative rounded">
          <img src="/images/destination/destination17.jpg" alt="image" />
          <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
            <div className="trend-content-title">
              <h5 className="mb-0">
                <a href="tour-single.html" className="theme1">
                  Italy
                </a>
              </h5>
              <h4 className="mb-0 white">Caspian Valley</h4>
            </div>
            <span className="white bg-theme p-1 px-2 rounded">18 Tours</span>
          </div>
          <div className="color-overlay"></div>
        </div>
      </div>
    </div> */
}
