import React from "react";
import { Navigate, Outlet } from "react-router-dom"; 
import { token } from "../utils/config";

/* eslint-disable */
const useAuth = () => {
  const isAuth = token;

  if (!isAuth || isAuth === null || isAuth==='') {
    return false;
  } 
  return true;
};
function ProtectedRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/auth/signin"} />;
}

export default ProtectedRoutes;
