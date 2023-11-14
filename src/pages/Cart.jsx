import React from "react";
import PageBanner from "../components/common/PageBanner";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  if (!user) {
    Swal.fire({
      title: "You are not authorized to access this page!",
      icon: "warning",
    });
    redirect("/login");
    return;
  }
  return (
    <div>
      <section
        className="breadcrumb-main pb-20 pt-14"
        style={{ backgroundImage: "url(/images/bg/bg1.jpg)" }}
      >
        <PageBanner path={"Your Cart"} />
      </section>
      <section className="trending pt-6 pb-0 bg-lgrey">
        <div className="container">
          <div className="row">
            <div className="w-100 mb-4">
              <div className="payment-book">
                <div className="booking-box">
                  {/* <div className="booking-box-title d-md-flex align-items-center bg-title p-4 mb-4 rounded text-md-start text-center">
                    <i className="fa fa-check px-4 py-3 bg-white rounded title fs-5"></i>
                    <div className="title-content ms-md-3">
                      <h3 className="mb-1 white">
                        Thank You. Your booking order is confirmed now.
                      </h3>
                      <p className="mb-0 white">
                        A confirmation email has been sent to your provided
                        email address.
                      </p>
                    </div>
                  </div> */}
                  <div className="travellers-info mb-4">
                    <table>
                      <thead>
                        <th>Order Number</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment Method</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="theme2">1012</td>
                          <td className="theme2">11/02/2022</td>
                          <td className="theme2">$550.00</td>
                          <td className="theme2">Bank Transfer</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="travellers-info mb-4">
                    <h4>Traveler Information</h4>
                    <table>
                      <tr>
                        <td>Booking Number</td>
                        <td>5784-BD245</td>
                      </tr>
                      <tr>
                        <td>First Name</td>
                        <td>Jessica</td>
                      </tr>
                      <tr>
                        <td>Last Name</td>
                        <td>Brown</td>
                      </tr>
                      <tr>
                        <td>Email Address</td>
                        <td>info#jessica.com</td>
                      </tr>
                      <tr>
                        <td>Street Address and number</td>
                        <td>353 Third floor Avenue</td>
                      </tr>
                      <tr>
                        <td>Town/City</td>
                        <td>Paris</td>
                      </tr>
                      <tr>
                        <td>ZIP Code</td>
                        <td>75800-875</td>
                      </tr>
                      <tr>
                        <td>Country</td>
                        <td>France</td>
                      </tr>
                    </table>
                  </div>
                  <div className="booking-border mb-4">
                    <h4 className="border-b pb-2 mb-2">Payment</h4>
                    <p className="mb-0">
                      This is the third time I&apos;ve used Travelo Website and
                      telling you the truth their services are always reliable
                      and it ony takes few minutes to plan and finalize.
                    </p>
                    <a href="#">Payment is made by Credit Card via Paypal</a>
                  </div>
                  <div className="booking-border mb-4">
                    <h4 className="border-b pb-2 mb-2">View Booking Details</h4>
                    <p className="mb-0">
                      This is the third time I&apos;ve used Travelo Website and
                      telling you the truth their services are always reliable
                      and it ony takes few minutes to plan and finalize.
                    </p>
                    <a href="#">https://www.travel.com/booking-details</a>
                  </div> */}
                  {/* <div className="booking-border d-flex">
                    <a href="#" className="nir-btn me-2">
                      <i className="fa fa-print"></i> Print
                    </a>
                    <a href="#" className="nir-btn-black">
                      <i className="fa fa-envelope-open-text"></i> Send To
                    </a>
                  </div> */}
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
