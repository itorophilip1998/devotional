import React from "react";
import "./subscribe.scss";
function Subscribe() {
  return (
    <div className="Subscribtion ">
      <div className="headingText">Subscribe to FULGA Devotionals Today</div>
      <div className="priceTag my-5">
        ₦ <h1 className="d-inline font-weight-bold">500</h1> only
      </div>
      <div className="breifInfo">
        Subscribe your double impact edition sunday school manual & the
        dayspring devotional full gospel assembly [fulga] for 6 months
      </div>
      <button className="subButn btn shadow">Subscribe</button>
    </div>
  );
}

export default Subscribe;
