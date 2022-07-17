import React from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { FavoriteBorder, Favorite } from "@material-ui/icons";
function Introduction({ item }) {
  // const [isFav, setIsFav] = useState(false);
  // const addFav = () => {
  //   setIsFav(true);
  //   toast.info("Added to favourites!");
  // };
  // const removeFav = () => {
  //   setIsFav(false);
  //   toast.info("Removed from favourites!");
  // };

  return (
    <div>
      <div className="introText">
        {/* start text */}
        <div className="container p-2 py-4">
          <span className="text d-block text-primary my-3">Introduction:</span>

          {/* {!isFav && (
            <FavoriteBorder
              color="primary"
              className="addFav"
              onClick={(e) => addFav()}
            />
          )}
          {isFav && (
            <Favorite
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
      {/* <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </div>
  );
}

export default Introduction;
