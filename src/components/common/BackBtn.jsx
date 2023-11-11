import React, { useEffect, useState } from "react";

const BackBtn = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showBackToTop && (
        <div id="back-to-top" onClick={handleBackToTop}>
          <a href="#"></a>
        </div>
      )}
    </>
  );
};

export default BackBtn;
