import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Courses from "./pages/Courses.jsx";
import LessonPlayer from "./components/LessonPlayer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyCourses from "./pages/MyCourses.jsx";


// Main App component
function App() {
  return (
    <Routes>
      {/* Root route redirects to login page */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login page route */}
      <Route path="/login" element={<Login />} />

      {/* Courses page (protected, user must be logged in) */}
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />

      {/* Lesson player for each course (protected) */}
      <Route
        path="/lesson/:courseId"
        element={
          <ProtectedRoute>
            <LessonPlayer />
          </ProtectedRoute>
        }
      />

      {/* Dashboard page (protected) */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* My Courses page (protected) */}
      <Route
        path="/my-courses"
        element={
          <ProtectedRoute>
            <MyCourses />
          </ProtectedRoute>
        }
      />

      {/* Fallback route redirects to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;