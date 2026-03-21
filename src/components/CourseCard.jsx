// Import the custom hook for handling enrollment logic
import { useCourses } from "../hooks/useCourses";

const CourseCard = ({ course }) => {
  // Get enrolled courses list and enroll function from custom hook
  const { enrolledCourses, enroll } = useCourses();

  // Check if this course is already enrolled
  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  return (
    // Container for each course card
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
      
      {/* Course title */}
      <h3>{course.title}</h3>

      {/* Course description */}
      <p>{course.description}</p>

      {/* Course category (new improvement) */}
      <p><strong>Category:</strong> {course.category}</p>

      {/* Enroll button */}
      <button 
        onClick={() => enroll(course)} // When clicked, enroll user in course
      >
        {/* If already enrolled, show "Enrolled", else show "Enroll" */}
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>
    </div>
  );
};

export default CourseCard;