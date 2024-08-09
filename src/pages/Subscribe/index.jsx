import { useSelector } from "react-redux";

import NoSub from "./NoSub";
import Sub from "./Sub";

function Subscribe() {
  const isSub = true;
 
  return <div>{isSub ? <NoSub /> : <Sub />}</div>;
}

export default Subscribe;
