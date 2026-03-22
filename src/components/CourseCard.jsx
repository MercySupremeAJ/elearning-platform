// CourseCard.jsx
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom"; // for navigation

const CourseCard = ({ course }) => {
  // 🔹 Get enrollment functions & state
  const { enrolledCourses, enrollCourse } = useEnrollment();
  const navigate = useNavigate();

  // 🔹 Check if user is already enrolled in this course
  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem", borderRadius: "6px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      {/* Course title & description */}
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      {/* 🔹 Enroll button */}
      <button
        onClick={() => enrollCourse(course)}
        disabled={isEnrolled}
        style={{ padding: "0.5rem 1rem", cursor: isEnrolled ? "not-allowed" : "pointer" }}
      >
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>

      {/* 🔹 Go to Lesson button (shown only if enrolled) */}
      {isEnrolled && (
        <button
          style={{ marginLeft: "1rem", padding: "0.5rem 1rem", cursor: "pointer" }}
          onClick={() => navigate(`/lesson/${course.id}`)}
        >
          Go to Lesson
        </button>
      )}
    </div>
  );
};

export default CourseCard;