import React, { Fragment } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
 
function Loader() {
  return (
    <Fragment>
      <CircularProgress color="white" className={'circle mr-2'} /> {" please wait.."}
    </Fragment>
  );
}

export default Loader;
