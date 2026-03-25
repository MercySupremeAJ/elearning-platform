import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ ADD
import lessonsData from "../data/lessons";

const MyCourses = () => {
  const { enrolledCourses, progress, unenrollCourse } = useEnrollment();
  const { user } = useAuth(); // ✅ CURRENT USER
  const navigate = useNavigate();

  const getLessonCount = (courseId) =>
    lessonsData[courseId]?.length || 0;

  const getProgressColor = (percentage) => {
    if (percentage >= 75) return "#4caf50";
    if (percentage >= 40) return "#ff9800";
    return "#f44336";
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>My Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p>No courses yet.</p>
      ) : (
        enrolledCourses.map((course) => {
          const totalLessons = getLessonCount(course.id);

          // ✅ FIXED
          const completedLessons =
            progress[user?.username]?.[course.id]?.length || 0;

          const progressPercentage = totalLessons
            ? Math.round((completedLessons / totalLessons) * 100)
            : 0;

          const barColor = getProgressColor(progressPercentage);

          return (
            <div
              key={course.id}
              style={{
                padding: "1rem",
                margin: "1rem 0",
                borderRadius: "10px",
                background: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{course.title}</h3>

              {/* Progress Bar */}
              <div style={{ background: "#eee", height: "10px" }}>
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    background: barColor,
                    height: "100%",
                  }}
                />
              </div>

              <p>{progressPercentage}% Complete</p>

              <button onClick={() => navigate(`/lesson/${course.id}`)}>
                Continue
              </button>

              <button onClick={() => unenrollCourse(course.id)}>
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