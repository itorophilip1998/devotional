// import React, { useState } from "react";
// import VolumeOffIcon from "@material-ui/icons/VolumeOff";
// import VolumeUpIcon from "@material-ui/icons/VolumeUp";
function Introduction({ item }) {
  // const [isFav, setIsFav] = useState(false);
  // const addFav = async (e) => {
  //   setIsFav(true);
  // };
  // const removeFav = async (e) => {
  //   e.preventDefault();
  //   setIsFav(false);
  // };

  return (
    <div>
      <div className="introText">
        {/* start text */}
        <div className="container p-2 py-4">
          <span className="text d-block text-primary my-3">Introduction:</span>

          {/* {!isFav && (
            <VolumeOffIcon
              color="primary"
              className="addFav"
              onClick={(e) => addFav()}
            />
          )}
          {isFav && (
            <VolumeUpIcon
              color="primary"
              className="removeFav"
              onClick={(e) => removeFav()}
            />
          )} */}

          <span className="text-content introduction text-dark d-block  text-justify">
            {item.introduction}
          </span>
        </div>
        {/* end text */}
      </div>
    </div>
  );
}

export default Introduction;
