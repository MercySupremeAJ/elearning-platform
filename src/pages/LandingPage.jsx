import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="nav-header" style={{ marginTop: "2rem" }}>
        <div className="nav-brand">Supremium Learning</div>
        <div className="nav-actions">
          <button className="btn btn-outline" onClick={() => navigate("/login")}>
            Log In
          </button>
          <button className="btn btn-primary" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </header>

      <main className="hero">
        <h1>Master the Future<br />of Technology.</h1>
        <p>
          World-class education for ambitious minds. 
          Learn from industry experts with our meticulously crafted, interactive curriculum.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={() => navigate("/signup")} style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
            Start Learning for Free
          </button>
          <button className="btn btn-outline" onClick={() => navigate("/courses")} style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
            Browse Courses
          </button>
        </div>

        <div className="features-grid">
          <div className="feature-card glass-panel">
            <span className="feature-icon">🚀</span>
            <h3>Accelerated Growth</h3>
            <p className="text-dim">Fast-track your career with focused, high-impact learning modules.</p>
          </div>
          <div className="feature-card glass-panel">
            <span className="feature-icon">💻</span>
            <h3>Practical Skills</h3>
            <p className="text-dim">Build real-world projects that matter. Stop watching, start coding.</p>
          </div>
          <div className="feature-card glass-panel">
            <span className="feature-icon">🌐</span>
            <h3>Global Network</h3>
            <p className="text-dim">Join thousands of students and mentors worldwide.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;