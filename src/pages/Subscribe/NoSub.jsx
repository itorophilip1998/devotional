import React from "react";
import { usePaystackPayment } from "react-paystack";

// import { useSelector } from "react-redux";
import { subscribe } from "../../utils/request/index";

// you can call this function anything
const onSuccess = (data) => {
  // Implementation for whatever you want to do with reference and after success call.
  const currentDate = new Date();
  const startDate = currentDate.toISOString().split("T")[0];
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 6,
    currentDate.getDate()
  )
    .toISOString()
    .split("T")[0];

  const payload = {
    start_date: startDate,
    end_date: endDate,
    reference: data.reference,
    status: data.status,
  };

  subscribe(payload);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};

function NoSub() {
  const email = window.localStorage.getItem("email");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: 700 * 100,
    // publicKey: "pk_live_3f3b5aebbf467d9c030ed9c76ee332eaa9ab9ddf",
    publicKey: "pk_test_b9ac9968f82485184ceaa9a31ab524bdc9efb58c",
  };
  const initializePayment = usePaystackPayment(config);

  return (
    <div className="Subscribtion ">
      <div className="headingText">Subscribe to FULGA Devotionals Today</div>
      <div className="priceTag my-5">
        ₦ <h1 className="d-inline font-weight-bold">{700}</h1> only
      </div>
      <div className="breifInfo">
        Subscribe your double impact edition sunday school manual & the
        dayspring devotional for <b>6 Months</b>
      </div>
      <button
        className="subButn btn shadow mb-5"
        onClick={async () => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Subscribe
      </button>
    </div>
  );
}

export default NoSub;
