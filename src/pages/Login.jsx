import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* <div id="preloader">
        <div id="status"></div>
      </div> */}
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}
      >
        <PageBanner path={"Login"}/>
      </section>
      {/* <!-- BreadCrumb Ends -->  */}

      {/* <!-- login section starts --> */}
      <section className="login-register pt-6 pb-6">
        <div className="container">
          <div className="log-main blog-full log-reg w-75 mx-auto">
            <div className="row">
              <div className=" pe-4" style={{maxWidth: "600px", margin: "0px auto"}}>
                <h3 className="text-center border-b pb-2">Login</h3>
                <form
                  method="post"
                  action="#"
                  name="contactform"
                  id="contactform3"
                >
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      id="fullname"
                      placeholder="User Name or Email Address"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      name="password_name"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="exampleCheck3"
                    />
                    <label
                      className="custom-control-label mb-0"
                      htmlFor="exampleCheck3"
                    >
                      Remember me
                    </label>
                    <a className="float-end" href="#">
                      Lost your password?
                    </a>
                  </div>
                  <div className="comment-btn mb-2 pb-2 text-center border-b">
                    <input
                      type="submit"
                      className="nir-btn"
                      id="submit1"
                      value="Login"
                      style={{fontWeight: "600"}}
                    />
                  </div>
                  <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="theme">
                      Register
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
      {/* <!-- login section Ends --> */}
    </div>
  );
};

export default Login;