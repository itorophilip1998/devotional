import React from 'react'
import "./subscribe.scss";
function Subscribe() {
  return (
    <div className='Subscribtion'>
      <div className="headingText">Subscribe to FULGA Devotionals Today</div>
      <div className="priceTag">
        ₦ <h1 className="d-inline">500</h1> only
      </div>
      <div className="breifInfo">Devotionals for 6 months</div>
      <button className="subButn">Subscribe</button>
    </div>
  );
}

export default Subscribe