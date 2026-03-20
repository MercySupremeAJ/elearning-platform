import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Courses from './pages/Courses.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/courses"
        element={
          <ProtectedRoute>
            <Courses />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;