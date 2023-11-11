import React from "react";

const TourGridCard = () => {
  const handleTourDetails = (id) => {
    window.location.href = `/tours-list/details/${id}`;
  };
  return (
    <div onClick={()=> handleTourDetails(1)} className="col-lg-6 col-md-6 mb-4" style={{cursor: "pointer"}}>
      <div className="trend-item rounded box-shadow">
        <div className="trend-image position-relative">
          <img src="/images/trending/trending2.jpg" alt="image" className="" />
          <div className="color-overlay"></div>
        </div>
        <div className="trend-content p-4 pt-5 position-relative">
          <div className="trend-meta bg-theme white px-3 py-2 rounded">
            <div className="entry-author">
              <i className="icon-calendar"></i>
              <span className="fw-bold"> 9 Days Tours</span>
            </div>
          </div>
          <h5 className="theme mb-1">
            <i className="flaticon-location-pin"></i> Croatia
          </h5>
          <h3 className="mb-1">
            <a href="tour-single.html">Piazza Castello</a>
          </h3>
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
          <p className=" border-b pb-2 mb-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum
          </p>
          <div className="entry-meta">
            <div className="entry-author d-flex align-items-center">
              <p className="mb-0">
                <span className="theme fw-bold fs-5"> $170.00</span> | Per
                person
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourGridCard;
