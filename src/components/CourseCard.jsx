import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";
import lessonsData from "../data/lessons"; // 🔹 Needed for mini progress bars

const CourseCard = ({ course }) => {
  const { enrolledCourses, enrollCourse, progress } = useEnrollment();
  const navigate = useNavigate();

  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  // 🔹 Calculate mini progress percentage
  const totalLessons = lessonsData[course.id]?.length || 0;
  const completedLessons = progress[course.id]?.length || 0;
  const miniProgress = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

  // 🔹 Decide progress bar color
  const getProgressColor = (percentage) => {
    if (percentage >= 75) return "#4caf50"; // Green
    if (percentage >= 40) return "#ff9800"; // Orange
    return "#f44336"; // Red
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        margin: "1rem 0",
        padding: "1rem",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{course.title}</h3>
      <p style={{ margin: "0 0 1rem 0", color: "#555" }}>{course.description}</p>

      {/* 🔹 Mini progress bar for enrolled courses */}
      {isEnrolled && (
        <div
          style={{
            background: "#eee",
            height: "8px",
            borderRadius: "4px",
            overflow: "hidden",
            marginBottom: "0.5rem",
          }}
        >
          <div
            style={{
              width: `${miniProgress}%`,
              height: "100%",
              background: getProgressColor(miniProgress),
              transition: "width 0.5s ease-in-out",
            }}
          />
        </div>
      )}

      {/* 🔹 Enroll button */}
      <button
        onClick={() => enrollCourse(course)}
        disabled={isEnrolled}
        style={{
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "5px",
          cursor: isEnrolled ? "not-allowed" : "pointer",
          background: isEnrolled ? "#9e9e9e" : "#2196f3",
          color: "#fff",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => {
          if (!isEnrolled) e.currentTarget.style.background = "#1976d2";
        }}
        onMouseLeave={(e) => {
          if (!isEnrolled) e.currentTarget.style.background = "#2196f3";
        }}
      >
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>

      {/* 🔹 Go to Lesson button */}
      {isEnrolled && (
        <button
          style={{
            marginLeft: "1rem",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            background: "#4caf50",
            color: "#fff",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#388e3c")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#4caf50")}
          onClick={() => navigate(`/lesson/${course.id}`)}
        >
          Go to Lesson
        </button>
      )}
    </div>
  );
};

export default CourseCard;