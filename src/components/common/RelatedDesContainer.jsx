import React, { useEffect, useRef, useState } from "react";
import RelatedDesCard from "../RelatedDesCard";

const RelatedDesContainer = ({ relatedDestination = [], getToursByCity }) => {
  const delay = 2500;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === relatedDestination?.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, relatedDestination?.length]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {relatedDestination?.map((data, index) => (
          <RelatedDesCard key={index} data={data} getToursByCity={getToursByCity}/>
        ))}
      </div>
    </div>
  );
};

export default RelatedDesContainer;
