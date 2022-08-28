import {  useSelector } from "react-redux";

import NoSub from "./NoSub";
import Sub from "./Sub";

function Subscribe() {
  const { isSub } = useSelector((state) => state.data);

  return <div>{isSub ? <Sub /> : <NoSub />}</div>;
}

export default Subscribe;
