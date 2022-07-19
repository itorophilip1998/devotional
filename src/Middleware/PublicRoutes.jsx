import React from "react"; 
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const isAuth = localStorage.getItem("token");

  if (isAuth || isAuth !== null) {
    return false;
  }
  return true;
};
function PublicRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to={"/devotional"} />;
}

export default PublicRoutes;
