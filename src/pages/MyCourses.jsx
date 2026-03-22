import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";
import courses from "../data/courses";
import lessonsData from "../data/lessons"; // Central lessons data

const MyCourses = () => {
  const { enrolledCourses, progress, unenrollCourse } = useEnrollment();
  const navigate = useNavigate();

  const getLessonCount = (courseId) => lessonsData[courseId]?.length || 0;

  // 🔹 Function to determine progress bar color
  const getProgressColor = (percentage) => {
    if (percentage >= 75) return "#4caf50"; // Green
    if (percentage >= 40) return "#ff9800"; // Orange
    return "#f44336"; // Red
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "1rem" }}>My Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        enrolledCourses.map((course) => {
          const totalLessons = getLessonCount(course.id);
          const completedLessons = progress[course.id]?.length || 0;
          const progressPercentage = totalLessons
            ? Math.round((completedLessons / totalLessons) * 100)
            : 0;

          const barColor = getProgressColor(progressPercentage);

          return (
            <div
              key={course.id}
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                margin: "1rem 0",
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

              {/* Progress Bar */}
              <div
                style={{
                  background: "#eee",
                  height: "12px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    height: "100%",
                    background: barColor,
                    transition: "width 0.5s ease-in-out",
                  }}
                />
              </div>
              <p style={{ margin: "0 0 1rem 0" }}>{progressPercentage}% Complete</p>

              {/* Buttons */}
              <button
                onClick={() => navigate(`/lesson/${course.id}`)}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#2196f3",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1976d2")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2196f3")}
              >
                Continue Learning
              </button>

              <button
                onClick={() => unenrollCourse(course.id)}
                style={{
                  padding: "0.5rem 1rem",
                  marginLeft: "1rem",
                  background: "#f44336",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#d32f2f")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f44336")}
              >
                Unenroll
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MyCourses;