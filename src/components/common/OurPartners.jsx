import React from "react";
import partners from "../../fake-data/partners";
import { useSelector } from "react-redux";
import sectionsContent from "../../web-content/sectionsContent";

const OurPartners = () => {
  const { lngMode } = useSelector((state) => state.lngMode);
  const { ourPartners } = sectionsContent;
  return (
    <section className="our-partner pb-6 pt-6">
      <div className="container">
        <div className="section-title mb-6 w-75 mx-auto text-center">
          <h4 className="mb-1 theme1">
            {lngMode == "en"
              ? ourPartners?.subTitle?.en
              : ourPartners?.subTitle?.ar}
          </h4>
          <h2 className="mb-1">
            {lngMode == "en" ? ourPartners?.title?.en : ourPartners?.title?.ar}
          </h2>
          <p>
            {lngMode == "en"
              ? ourPartners?.description?.en
              : ourPartners?.description?.ar}
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
