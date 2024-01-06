import {  useSelector } from "react-redux";

import NoSub from "./NoSub";
import Sub from "./Sub";

function Subscribe() {
  const { isSub } = useSelector((state) => state.data);

  return <div>{isSub===false ? <Sub /> : <NoSub />}</div>;
}

export default Subscribe;
