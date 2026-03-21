import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Courses from "./pages/Courses.jsx";
import LessonPlayer from "./components/LessonPlayer.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

// Main App component
function App() {
  return (
    <Routes>
      {/* Login page route */}
      <Route path="/login" element={<Login />} />

      {/* Courses page route (protected, user must be logged in) */}
      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />

      {/* Lesson Player route for each course */}
      <Route
        path="/courses/:courseId/lessons"
        element={
          <ProtectedRoute>
            <LessonPlayer />
          </ProtectedRoute>
        }
      />

      {/* Default/fallback route redirects to login */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;