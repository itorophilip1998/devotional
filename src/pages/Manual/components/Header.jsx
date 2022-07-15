import { Typography } from "@material-ui/core";
import React from "react";
import Aim from "./Aim";
import CentralTruth from "./CentralTruth";
import MainPoint from "./MainPoint";

function Header({ item }) {
  return (
    <div>
      <div className="devotional_header shadow">
        {/* start topic */}
        <Typography
          variant="h6"
          display="block"
          className="text-center d-block mb-5 container topic"
          gutterBottom
        >
          {item.topic}
        </Typography>
        {/* end topic */}

        {/* start text */}
        <div className="container">
          <span className="text">Text: </span>
          <span className="text-letter text-white font-italic ">
            {" "}
            {item.text}
          </span>
        </div>
        {/* end text */}
        {item?.aim && <Aim item={item} />}
        {item?.central_truth && <CentralTruth item={item} />}
        <MainPoint item={item} />
      </div>
    </div>
  );
}

export default Header;
