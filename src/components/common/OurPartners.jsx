import React from "react";
import partners from "../../fake-data/partners";

const OurPartners = () => {
  return (
    <section className="our-partner pb-6 pt-6">
      <div className="container">
        <div className="section-title mb-6 w-75 mx-auto text-center">
          <h4 className="mb-1 theme1">Our Partners</h4>
          <h2 className="mb-1">
            Our Awesome <span className="theme">partners</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div className="row align-items-center partner-in partner-slider">
          {partners?.map((partner, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="partner-item p-4 py-2 rounded bg-lgrey">
                <img src={partner?.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
