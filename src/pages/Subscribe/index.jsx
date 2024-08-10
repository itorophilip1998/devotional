 

import NoSub from "./NoSub";
import Sub from "./Sub";
import { useAuth } from "../../context/firebaseContext";

function Subscribe() {
  const { userDetails: user } = useAuth();
  return <div>{!user?.isSub ? <NoSub /> : <Sub />}</div>;
}

export default Subscribe;
