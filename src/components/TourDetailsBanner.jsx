import React, { useEffect, useRef, useState } from "react";

const TourDetailsBanner = ({ images }) => {
  const [viewImg, setViewImg] = useState(images[0]);
  const sliderRef = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;

  let velX = 0;
  let momentumID;

  const mousedownHandle = (e) => {
    isDown = true;
    const slider = sliderRef.current;
    slider.classList.add("cursor-grabbing");
    slider.classList.remove("scroll-smooth");

    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    cancelMomentumTracking();
  };
  const mouseleaveHandle = (e) => {
    const slider = sliderRef.current;
    isDown = false;
    slider.classList.add("scroll-smooth");
    slider.classList.remove("cursor-grabbing");
  };
  const mouseupHandle = (e) => {
    const slider = sliderRef.current;
    isDown = false;
    slider.classList.remove("cursor-grabbing");
    slider.classList.add("scroll-smooth");
    beginMomentumTracking();
  };

  const mousemoveHandle = (e) => {
    const slider = sliderRef.current;
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5; //scroll-fast
    let prevScrollLeft = slider.scrollLeft;
    slider.scrollLeft = scrollLeft - walk;
    velX = slider.scrollLeft - prevScrollLeft;
  };
  function beginMomentumTracking() {
    cancelMomentumTracking();
    momentumID = requestAnimationFrame(momentumLoop);
  }
  function cancelMomentumTracking() {
    cancelAnimationFrame(momentumID);
  }
  function momentumLoop() {
    const slider = sliderRef.current;
    slider.scrollLeft += velX;
    velX *= 0.95;
    if (Math.abs(velX) > 0.5) {
      momentumID = requestAnimationFrame(momentumLoop);
    }
  }
  const nextPrevScrollHandle = (method) => {
    const slider = sliderRef.current;
    const race = 150;
    slider.classList.add("scroll-smooth");
    if (method > 0) {
      // Scroll right
      slider.scrollLeft += race;
    } else {
      // Scroll left
      slider.scrollLeft -= race;
    }
    setTimeout(() => {
      slider.classList.remove("scroll-smooth");
    }, 200);
  };

  useEffect(() => {
    const scrollWidth = sliderRef.current.scrollWidth;
    const containerWidth = sliderRef.current.clientWidth;

    const scrollInterval = setInterval(() => {
      const slider = sliderRef.current;
      if (slider) {
        if (slider?.scrollLeft < scrollWidth - containerWidth) {
          slider.scrollLeft += 150;
          scrollLeft = slider.scrollLeft;
        } else {
          slider.scrollLeft = 0;
          scrollLeft = slider.scrollLeft;
        }
      }
    }, 3000);

    return () => {
      // clearInterval(scrollInterval);
    };
  }, []);
  return (
    <div className=" mb-4  rounded">
      <div className=" position-relative">
        <div className="   rounded">
          <div>
            <img
              src={viewImg || "/images/trending/trending1.jpg"}
              alt="1"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div
          className="single-tour-img-slider"
          ref={sliderRef}
          onMouseMove={mousemoveHandle}
          onMouseUp={mouseupHandle}
          onMouseLeave={mouseleaveHandle}
          onMouseDown={mousedownHandle}
          onWheel={cancelMomentumTracking}
        >
          {images?.map((img, index) => (
            <div
              key={index}
              className="single-tour-img-slider-item "
              onClick={() => setViewImg(img)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={img}
                alt={img}
                style={{ width: "150px", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourDetailsBanner;
