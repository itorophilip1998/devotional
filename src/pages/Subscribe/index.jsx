import { useSelector } from "react-redux";

import NoSub from "./NoSub";
import Sub from "./Sub";

function Subscribe() {
  const isSub = useSelector((state) => state.data.isSub);
 
  return <div>{isSub === "0" ? <NoSub /> : <Sub />}</div>;
}

export default Subscribe;
