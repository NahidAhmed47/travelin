import React from "react";
import PageBanner from "../components/common/PageBanner";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";
import { useGetAllCartsQuery } from "../redux/api/apiSlice";
import Loader from "../components/global/Loader";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const token = Cookies.get("access_token_web_tours");
  const { data, isLoading } = useGetAllCartsQuery({ token });
  if (!user) {
    Swal.fire({
      title: "You are not authorized to access this page!",
      icon: "warning",
    });
    redirect("/login");
    return;
  }
  if (isLoading) {
    return <Loader />;
  }
  const carts = data?.data;
  console.log(carts);
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
                  <div className="travellers-info mb-4">
                    <table>
                      <thead>
                        <th>No.</th>
                        <th>Order Number</th>
                        <th>Tour</th>
                        <th>Date</th>
                        <th>Guest</th>
                        {/* <th>Total Amount</th> */}
                      </thead>
                      <tbody>
                        {carts?.map((cart, index) => (
                          <tr key={cart?.id}>
                            <td className="theme2">{index + 1}</td>
                            <td className="theme2">{cart?.id}</td>
                            <td className="theme2">{cart?.date}</td>
                            <td className="theme2">{cart?.tour?.title}</td>
                            <td className="theme2">{cart?.guests_no}</td>
                            {/* <td className="theme2">Bank Transfer</td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
