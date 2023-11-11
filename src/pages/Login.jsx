import React from "react";
import PageBanner from "../components/common/PageBanner";
import { Link } from "react-router-dom";
import { useUserLogInMutation } from "../redux/api/apiSlice";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/features/user/userSlice";
import Cookies from "js-cookie";

const Login = () => {
  const [userLogin, { error }] = useUserLogInMutation();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLoginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = { email, password };
    const res = await userLogin({ data });
    if (res?.data?.status === true) {
      dispatch(setUser(data));
      Cookies.set("access_token_web_tours", res?.data?.token);
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Login failed",
        text: `${res?.error?.data?.message}`,
      });
    }
  };
  return (
    <div>
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}
      >
        <PageBanner path={"Login"} />
      </section>
      {/* <!-- BreadCrumb Ends -->  */}

      {/* <!-- login section starts --> */}
      <section className="login-register pt-6 pb-6">
        <div className="container">
          <div className="log-main blog-full log-reg w-75 mx-auto">
            <div className="row">
              <div
                className=" pe-4"
                style={{ maxWidth: "600px", margin: "0px auto" }}
              >
                <h3 className="text-center border-b pb-2">Login</h3>
                <form
                  onSubmit={handleLoginUser}
                  name="contactform"
                  id="contactform3"
                >
                  <div className="form-group mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="fullname"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
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
                      style={{ fontWeight: "600" }}
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
