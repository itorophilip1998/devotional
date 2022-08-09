import React from "react";
import "./tip.scss";
import { tips } from "../../Database/tips";
function Tip() {
  return (
    <div className="tips  pb-5 mb-3 p-2 text-center pt-3">
      {tips &&
        tips.map((item, index) => (
          <div key={index} className="py-2">
            <h4 className="text-head text-uppercase text text-primary">
              {item.head}
            </h4>
            <p>{!Array.isArray(item.body) && item.body}</p>
            <p className="">
              {Array.isArray(item?.body) && item?.body.map((i,k) => (<div key={k}>{i}</div>))}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Tip;
