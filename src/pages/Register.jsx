import React, { useState } from "react";
import PageBanner from "../components/common/PageBanner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [checkboxStatus, setCheckboxStatus] = useState(false);
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    // check password and repassword
    if (password !== repassword) {
      return Swal.fire({
        icon: "error",
        title: "Password not matched!",
      });
    }
    // check checkbox
    if (!checkboxStatus) {
      return Swal.fire({
        icon: "error",
        title: "Please accept the Terms and Privacy Policy!",
      });
    }
    const user = {
      first_name,
      last_name,
      email,
      phone,
      password,
    };
    console.log(user);
  };
  return (
    <div className="">
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
                  name="contactform2"
                  id="contactform2"
                  onSubmit={handleRegisterUser}
                >
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      name="first_name"
                      className="form-control"
                      id="1"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      name="last_name"
                      className="form-control"
                      id="1"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="email1"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      id="email1"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password1"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="password"
                      name="repassword"
                      className="form-control"
                      id="repassword"
                      placeholder="Re-enter Password"
                      required
                    />
                  </div>
                  <div className="form-group mb-2 d-flex">
                    <input
                      type="checkbox"
                      name="checkbox"
                      onChange={() => setCheckboxStatus(!checkboxStatus)}
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
