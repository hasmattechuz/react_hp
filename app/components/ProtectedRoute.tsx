import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Wait for user to load from localStorage
    return <div>Loading...</div>; // or spinner
  }

  if (!user) {
    // Redirect to login if user is not found
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
