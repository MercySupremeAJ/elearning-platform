import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

// Wraps around any page/component that requires login
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;