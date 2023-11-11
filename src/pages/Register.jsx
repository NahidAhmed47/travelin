import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="">
      {/* <div id="preloader">
        <div id="status"></div>
      </div> */}
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}
      >
        <PageBanner path={"Register"} />
      </section>
      <section className="login-register pt-6 pb-6">
        <div className="container">
          <div className="log-main blog-full log-reg w-75 mx-auto">
            <div className="row">
              <div
                className=" pe-4"
                style={{ maxWidth: "600px", margin: "0px auto" }}
              >
                <h3 className="text-center border-b pb-2">Register</h3>

                <form
                  method="post"
                  action="#"
                  name="contactform2"
                  id="contactform2"
                >
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      name="user_name1"
                      className="form-control"
                      id="1"
                      placeholder="User Name"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      name="email_name"
                      className="form-control"
                      id="email1"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      name="password_name1"
                      className="form-control"
                      id="password1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      name="repassword_name"
                      className="form-control"
                      id="repassword"
                      placeholder="Re-enter Password"
                    />
                  </div>
                  <div className="form-group mb-2 d-flex">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="exampleCheck"
                    />
                    <label
                      className="custom-control-label mb-0 ms-1 lh-1"
                      htmlFor="exampleCheck"
                    >
                      I have read and accept the Terms and Privacy Policy?
                    </label>
                  </div>
                  <div className="comment-btn mb-2 pb-2 text-center border-b">
                    <input
                      type="submit"
                      className="nir-btn"
                      id="submit3"
                      style={{ fontWeight: "600" }}
                      value="Register"
                    />
                  </div>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="theme">
                      Login
                    </Link>
                  </p>
                </form>
                <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                <div className="log-reg-button d-sm-flex align-items-center justify-content-between">
                  <button type="submit" className="btn btn-fb w-50 me-1">
                    <i className="fab fa-facebook"></i> Login with Facebook
                  </button>
                  <button type="submit" className="btn btn-google w-50 ms-1">
                    <i className="fab fa-google"></i> Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
