import React from "react";
import { usePaystackPayment } from "react-paystack";

import "./subscribe.scss";
import { useSelector } from "react-redux";

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};


// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
};


function Subscribe() {
  const email = useSelector((state) => state.data.user.email);
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: 700 * 100,
    // publicKey: "pk_live_3f3b5aebbf467d9c030ed9c76ee332eaa9ab9ddf",
    publicKey: "pk_test_cd99366d3f03586b34de50fd34d28ff578c7e9e2",
  };
  const initializePayment = usePaystackPayment(config);

  return (
    <div className="Subscribtion pb-4">
      <div className="headingText">Subscribe to FULGA Devotionals Today</div>
      <div className="priceTag my-5">
        ₦ <h1 className="d-inline font-weight-bold">{700  }</h1> only
      </div>
      <div className="breifInfo">
        Subscribe your double impact edition sunday school manual & the
        dayspring devotional full gospel assembly [fulga] for 6 months
      </div>
      <button
        className="subButn btn shadow mb-5"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Subscribe
      </button>
    </div>
  );
}

export default Subscribe;
