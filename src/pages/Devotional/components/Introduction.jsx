import React, { useState } from "react";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
function Introduction({ item }) {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className="introduction">
      <div className="introText">
        {/* start text */}
        <div className="container p-2 py-4">
          <span className="text d-block text-primary my-3">Introduction:</span>

          {isFav && (
            <Favorite
              color="primary"
              className="addFav"
              onClick={(e) => setIsFav(false)}
            />
          )}
          {!isFav && (
            <FavoriteBorder
              color="primary"
              className="removeFav"
              onClick={(e) => setIsFav(true)}
            />
          )}

          <span className="text-content text-dark d-block  text-justify">
            {item.introduction}
          </span>
        </div>
        {/* end text */}
      </div>
    </div>
  );
}

export default Introduction;
