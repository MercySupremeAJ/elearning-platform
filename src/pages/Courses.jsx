// Courses.jsx
import courses from "../data/courses"; // Course data
import CourseCard from "../components/CourseCard"; // Individual course card
import { useNavigate } from "react-router-dom"; // For navigation

const Courses = () => {
  const navigate = useNavigate(); // ✅ Hook must be inside component

  // 🔹 Group courses by category for display
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Available Courses</h2>

      {/* 🔹 Button to go to Dashboard */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1.5rem",
          cursor: "pointer",
          borderRadius: "5px",
          border: "1px solid #2196f3",
          background: "#2196f3",
          color: "#fff",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#1976d2")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#2196f3")}
      >
        Go to Dashboard
      </button>

      {/* 🔹 Loop through each category */}
      {Object.keys(groupedCourses).map((category) => (
        <div key={category}>
          <h3 style={{ marginTop: "2rem", color: "#1976d2" }}>{category}</h3>

          {/* 🔹 Render all courses in this category */}
          {groupedCourses[category].map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;