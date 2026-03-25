// src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import courses from "../data/courses";

const LandingPage = () => {
  const navigate = useNavigate();
  const { login, user, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !email) {
      alert("Please enter both username and email");
      return;
    }

    // Simple email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    login(username, email);
    navigate("/dashboard");
  };

  const previewCourses = courses.slice(0, 4);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO */}
      <div
        style={{
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #2196f3, #21cbf3)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>AJScademy</h1>
        <p>Learn. Track. Grow.</p>

        {/* LOGIN FORM */}
        {!user ? (
          <form onSubmit={handleLogin} style={{ marginTop: "1rem" }}>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                padding: "0.7rem",
                borderRadius: "5px",
                border: "none",
                marginRight: "0.5rem",
              }}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                padding: "0.7rem",
                borderRadius: "5px",
                border: "none",
                marginRight: "0.5rem",
              }}
              required
            />

            <button
              type="submit"
              style={{
                padding: "0.7rem 1.5rem",
                background: "#fff",
                color: "#2196f3",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Get Started
            </button>
          </form>
        ) : (
          <div style={{ marginTop: "1rem" }}>
            <p>Welcome back, {user.username}!</p>
            <button
              onClick={() => logout()}
              style={{
                padding: "0.5rem 1rem",
                background: "#f44336",
                border: "none",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Logout
            </button>
          </div>
        )}

        {/* Browse without login */}
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "1rem",
            padding: "0.5rem 1rem",
            background: "transparent",
            border: "1px solid #fff",
            color: "#fff",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Browse Courses
        </button>
      </div>

      {/* COURSE PREVIEW */}
      <div style={{ padding: "2rem", background: "#f5f5f5" }}>
        <h2>Featured Courses</h2>

        {previewCourses.map((course) => (
          <div
            key={course.id}
            style={{
              margin: "1rem 0",
              padding: "1rem",
              background: "#fff",
              borderRadius: "8px",
            }}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;