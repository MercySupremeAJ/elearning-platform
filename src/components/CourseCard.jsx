import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom"; // for navigation

const CourseCard = ({ course }) => {
  const { enrolledCourses, enrollCourse } = useEnrollment();
  const navigate = useNavigate();

  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>

      {/* Enroll button */}
      <button
        onClick={() => enrollCourse(course)}
        disabled={isEnrolled}
      >
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>

      {/* Go to Lesson button */}
      {isEnrolled && (
        <button
          style={{ marginLeft: "1rem" }}
          onClick={() => navigate(`/lesson/${course.id}`)}
        >
          Go to Lesson
        </button>
      )}
    </div>
  );
};

export default CourseCard;