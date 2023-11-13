import React, { useState } from "react";
import RelatedDesContainer from "./common/RelatedDesContainer";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MakeBookingCntn = ({ tour }) => {
  console.log(tour);
  const token = Cookies.get("access_token_web_tours");
  const [guest, setGuest] = useState(1);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const costWithGuest = tour?.price * guest;
  const vat = (tour?.vat ? tour?.vat / 100 : 0) * costWithGuest;
  const totalCost = costWithGuest + vat;
  const handleBookTour = () => {
    if (!token || !user) {
      Swal.fire({
        title: "You need to login for add cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
        cancelButtonText: "Later",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }
    Swal.fire({
      title: "Yay! Cart added successfully!",
      icon: "success",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Go to cart",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate(`/cart?u_id=${user?.id}`);
      }
    });
  };
  return (
    <div className="col-lg-4 ps-lg-4">
      <div className="sidebar-sticky">
        <div className="list-sidebar">
          <div className="sidebar-item">
            <div className="form-content rounded overflow-hidden bg-title">
              <h4 className="white text-center border-b pb-2">
                MAKE A BOOKING
              </h4>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <span className="white pb-1">Your choosen date is</span>
                    <h4 className="choosen-date white mb-0 border-0">
                      <i className="fa fa-calendar"></i> 10 - 15 March, 2020{" "}
                      <small className="d-flex justify-content-between fw-normal w-100 my-2">
                        (5 days){" "}
                        <a href="#" className="white text-decoration-underline">
                          Change
                        </a>
                      </small>
                    </h4>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group mb-2">
                    <label className="white">No. Of People</label>
                    <div className="input-box">
                      <i className="flaticon-add-user"></i>
                      <select
                        className="niceSelect"
                        onChange={(e) => setGuest(e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group bg-white p-3 rounded mb-2">
                    <ul>
                      <li className="d-block pb-1">
                        $
                        {Number.isInteger(tour?.price)
                          ? tour?.price + ".00"
                          : tour?.price}{" "}
                        x {guest} guests
                        <span className="float-end fw-bold">
                          $
                          {Number.isInteger(costWithGuest)
                            ? costWithGuest + ".00"
                            : costWithGuest}
                        </span>
                      </li>
                      <li className="d-block pb-1">
                        Booking fee + tax
                        <span className="float-end  fw-bold">
                          ${Number.isInteger(vat) ? vat + ".00" : vat}
                        </span>
                      </li>
                      <li className="d-block  pb-1">
                        Book now &amp; Save
                        <span className="float-end   fw-bold">$0</span>
                      </li>
                      <li className="d-block pb-1">
                        Other fees
                        <span className="float-end  fw-bold">Free</span>
                      </li>
                      <li className="d-block border-t">
                        <div className="pt-1">
                          <span className="fw-bold">Total</span>
                          <span className="float-end  fw-bold">
                            $
                            {Number.isInteger(totalCost)
                              ? totalCost + ".00"
                              : totalCost}
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mb-0">
                    <button className="nir-btn w-100" onClick={handleBookTour}>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar-item">
            <div className="map-box rounded p-5 text-center">
              <i className="fa fa-map-marker fs-1 theme d-block mb-1"></i>
              <a href="#">Show on Map</a>
            </div>
            <div className="location-rating mb-2 mt-2">
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2">
                  <span className="location-box bg-theme1 white p-3 rounded">
                    4.5
                  </span>
                </div>
                <div className="col-lg-10 col-md-10">
                  <p className="mb-0">Exceptional</p>
                  <span>Location rating score</span>
                </div>
              </div>
            </div>
            <div className="location-features">
              <ul>
                <li className="mb-2">
                  <i className="fa fa-map-marker theme me-2"></i> Better than
                  99% of properties in London
                </li>
                <li className="mb-2">
                  <i className="fa fa-map-marker theme me-2"></i> Exceptional
                  Location - Inside city center
                </li>
                <li>
                  <i className="fa fa-map-marker theme me-2"></i> Popular
                  Neighbourhood
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar-item">
            <h3>Related Destinations</h3>
            <RelatedDesContainer relatedDestination={[1, 2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeBookingCntn;
