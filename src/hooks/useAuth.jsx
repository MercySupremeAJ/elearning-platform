import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";

// Custom hook to access AuthContext easily
export const useAuth = () => {
  return useContext(AuthContext);
};