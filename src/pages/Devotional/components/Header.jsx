import { Typography } from "@material-ui/core";
import React from "react";

function Header({ item }) {
  return (
    <div>
       
      <div className="devotional_header">
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
          <span className="text">Text:</span>
          <span className="text-content text-white font-italic">
            {" "}
            {item.text}
          </span>
        </div>
        {/* end text */}
      </div>
    </div>
  );
}

export default Header;
