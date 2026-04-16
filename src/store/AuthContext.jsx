// src/store/AuthContext.jsx
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const login = (username, email, phone = "Not provided", avatar = "") => {
    const trimmedUsername = username.trim();
    // Generate a beautiful dynamic avatar based on their name if no image is uploaded
    const defaultAvatar = avatar || `https://ui-avatars.com/api/?name=${trimmedUsername}&background=random`;
    
    const newUser = { 
        username: trimmedUsername, 
        email: email || `${trimmedUsername}@supremium.edu`,
        phone,
        avatar: defaultAvatar,
        joinDate: new Date().toLocaleDateString()
    };
    
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);