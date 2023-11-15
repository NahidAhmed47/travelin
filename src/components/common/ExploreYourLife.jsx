import React from "react";
import { useSelector } from "react-redux";
import sectionsContent from "../../web-content/sectionsContent";

const ExploreYourLife = () => {
  const { lngMode } = useSelector((state) => state.lngMode);
  const { exploreYLife } = sectionsContent;
  return (
    <section
      className="discount-action pt-0"
      style={{
        backgroundImage: "url(/images/section-bg1.png)",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="call-banner rounded pt-10 pb-14">
          <div className="call-banner-inner w-75 mx-auto text-center px-5">
            <div className="trend-content-main">
              <div className="trend-content mb-5 pb-2 px-5">
                <h5 className="mb-1 theme">
                  {lngMode == "en"
                    ? exploreYLife?.subTitle?.en
                    : exploreYLife?.subTitle?.ar}
                </h5>
                <h2>
                  <p>
                    {lngMode == "en"
                      ? exploreYLife?.title1?.en
                      : exploreYLife?.title1?.ar}
                    <span className="theme1">
                      {" "}
                      {lngMode == "en"
                        ? exploreYLife?.title2.en
                        : exploreYLife?.title2?.ar}
                    </span>
                  </p>
                </h2>
                <p>
                  {lngMode == "en"
                    ? exploreYLife?.description?.en
                    : exploreYLife?.description?.ar}
                </p>
              </div>
              <div className="video-button text-center position-relative">
                <div className="call-button text-center">
                  <button
                    type="button"
                    className="play-btn js-video-button"
                    data-video-id="152879427"
                    data-channel="vimeo"
                  >
                    <i className="fa fa-play bg-blue"></i>
                  </button>
                </div>
                <div className="video-figure"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white-overlay"></div>
      <div className="white-overlay"></div>
      <div
        className="section-shape  top-inherit bottom-0"
        style={{ backgroundImage: "url(/images/shape6.png)" }}
      ></div>
    </section>
  );
};

export default ExploreYourLife;
