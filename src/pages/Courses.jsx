// Courses.jsx
import courses from "../data/courses"; // Course data
import CourseCard from "../components/CourseCard"; // Course card component
import { useNavigate } from "react-router-dom"; // Navigation hook

const Courses = () => {
  const navigate = useNavigate(); // ✅ Must be inside component

  // 🔹 Group courses by category for display
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>

      {/* 🔹 Dashboard Button */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{ padding: "0.5rem 1rem", marginBottom: "1.5rem", cursor: "pointer" }}
      >
        Go to Dashboard
      </button>

      {/* 🔹 Loop through each category */}
      {Object.keys(groupedCourses).map((category) => (
        <div key={category}>
          {/* Category title */}
          <h3 style={{ marginTop: "2rem", color: "blue" }}>{category}</h3>

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