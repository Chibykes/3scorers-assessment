import { AuthUser } from "contexts/AuthUser";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Navigate, Outlet } from "react-router-dom";

export default function RequireAuth() {
  const { user } = useContext(AuthUser);

  return !user?.token && !user?.accessToken ? (
    <>
      <Navigate to="/login" replace={true} />
      {toast.error("Auth token has expired, please login again")}
    </>
  ) : (
    <Outlet />
  );
}
