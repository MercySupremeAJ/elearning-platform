import { useAuth } from "../hooks/useAuth";
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";
import coursesData from "../data/courses"; // Optional info

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { enrolledCourses } = useEnrollment();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <header className="nav-header" style={{ marginTop: "2rem" }}>
        <div className="nav-brand" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Supremium
        </div>
        <div className="nav-actions">
          <span className="text-dim" style={{ marginRight: "1rem" }}>
            Welcome, <strong style={{ color: "white" }}>{user?.username}</strong>
          </span>
          <button className="btn btn-outline" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      <main style={{ marginTop: "2rem" }}>
        <div className="glass-panel text-center mb-2" style={{ padding: "3rem 2rem" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Your Dashboard</h1>
          <p className="text-dim">Ready to conquer your next challenge?</p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
            <button className="btn btn-primary" onClick={() => navigate("/courses")}>
              Browse All Courses
            </button>
            <button className="btn btn-success" onClick={() => navigate("/my-courses")}>
              My Active Courses ({enrolledCourses.length})
            </button>
          </div>
        </div>

        <div className="features-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "2rem" }}>
          <div className="glass-panel">
            <h2>Quick Stats</h2>
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span className="text-dim">Courses Enrolled</span>
                <strong>{enrolledCourses.length}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span className="text-dim">Total Platform Courses</span>
                <strong>{coursesData.length}</strong>
              </div>
            </div>
          </div>
          
          <div className="glass-panel" style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)", border: "1px solid rgba(139, 92, 246, 0.3)" }}>
            <h2>Keep Learning</h2>
            <p className="text-dim mb-1" style={{ marginTop: "1rem" }}>
              "Live as if you were to die tomorrow. Learn as if you were to live forever."
            </p>
            <p style={{ textAlign: "right", fontStyle: "italic", fontSize: "0.9rem" }}>- Mahatma Gandhi</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;