import { Typography } from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useNavigate } from "react-router-dom";
 

// const ITEM_HEIGHT = 48;
function Header({ item }) {
  const navigate = useNavigate();
 
  return (
    <div>
      <div className=" p-0 pt-1 bg-back  ">
        <button className="btn btn-lg pl-2">
          <ArrowBackIcon className="text-white " onClick={() => navigate(-1)} />
        </button>
      </div>
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
          <span className="text text-warning">Text: </span>
          <span className="text-letter text-white font-italic ">
            {item.text}
          </span>
        </div>
        {/* end text */}
      </div>
    </div>
  );
}

export default Header;
