import React from "react";

const BlogCmntBox = () => {
  return (
    <div className="comment-box">
      <div className="comment-image">
        <img src="/images/reviewer/1.jpg" alt="image" />
      </div>
      <div className="comment-content rounded">
        <h5 className="mb-1">Helena</h5>
        <p className="comment-date">April 25, 2022 at 10:46 am</p>
        <div className="comment-rate">
          <div className="rating mar-right-15">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <span className="comment-title">The worst hotel ever</span>
        </div>

        <p className="comment">
          Take in the iconic skyline and visit the neighbourhood hangouts that
          you&apos;ve only ever seen on TV. Take in the iconic skyline and visit
          the neighbourhood.
        </p>
        <div className="comment-like">
          <div className="like-title">
            <a href="#" className="nir-btn">
              Reply
            </a>
          </div>
          <div className="like-btn pull-right">
            <a href="#" className="like">
              <i className="fa fa-thumbs-up"></i>
            </a>
            <a href="#" className="disike">
              <i className="fa fa-thumbs-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCmntBox;
