import React, { useState } from "react";
import accordianData from "../fake-data/accordianTourSingle";

const TourDayCollapse = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onAccClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div
      className="accrodion-grp faq-accrodion mb-4"
      data-grp-name="faq-accrodion"
    >
      {accordianData?.map((acc, index) => (
        <div
          onClick={() => onAccClick(index)}
          className={`accrodion ${activeIndex === index && "active"}`}
          key={index}
        >
          <div className="accrodion-title rounded">
            <h5 className="mb-0">
              <span>{acc.title}</span>
            </h5>
          </div>
          <div
            className="accrodion-content"
            style={{ display: `${activeIndex === index ? "block" : "none"}` }}
          >
            <div className="inner">
              <p>{acc.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourDayCollapse;
