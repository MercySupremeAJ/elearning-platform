import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

import Courses from "./pages/Courses.jsx";
import LessonPlayer from "./components/LessonPlayer.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyCourses from "./pages/MyCourses.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  return (
    <>
      <button 
        className="theme-toggle" 
        onClick={toggleTheme} 
        style={{ 
          position: 'fixed', top: '20px', right: '30px', zIndex: 9999, 
          padding: '10px 15px', borderRadius: '50px', background: 'var(--bg-card)', 
          color: 'var(--text-h)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          fontFamily: 'Outfit, sans-serif', fontWeight: 600, transition: 'all 0.3s'
        }}
      >
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
      </button>
      <Routes>
      {/* ✅ PUBLIC */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/courses" element={<Courses />} />

      {/* ✅ PROTECTED */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/lesson/:courseId"
        element={
          <ProtectedRoute>
            <LessonPlayer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/my-courses"
        element={
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        }
      />

      {/* ✅ FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}

export default App;