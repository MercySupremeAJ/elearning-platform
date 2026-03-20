import { createContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

// AuthProvider to wrap your app
export const AuthProvider = ({ children }) => {
  // State to track if user is logged in
  const [user, setUser] = useState(null);

  // Login function
  const login = (username) => {
    // Simple demo login (replace with real API later)
    setUser({ name: username });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};