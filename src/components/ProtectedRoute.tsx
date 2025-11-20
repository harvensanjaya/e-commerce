import type { JSX } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

function ProtectedRoute({ children }: { readonly children: JSX.Element }) {
  const { isAuthenticated} = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export default ProtectedRoute;
