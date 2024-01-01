import React from "react"; 
import { Navigate, Outlet } from "react-router-dom";

/* eslint-disable */
const useAuth = () => {
  const isAuth = localStorage.getItem("token") ?? '1936816313j1g3t815t3f13u';

  if (!isAuth || isAuth === null) {
    return false;
  }
  return true;
};
function ProtectedRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/auth/signin"} />;
}

export default ProtectedRoutes;
