// Import React
import React from "react";
// Import the enrollment context to manage global course enrollment
import { useEnrollment } from "../store/EnrollmentContext.jsx";

const CourseCard = ({ course }) => {
  // Destructure enrolledCourses and enrollCourse function from context
  const { enrolledCourses, enrollCourse } = useEnrollment();

  // Check if this course has already been enrolled by the user
  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  return (
    // Container for each course card
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
      
      {/* Course title */}
      <h3>{course.title}</h3>

      {/* Course description */}
      <p>{course.description}</p>

      {/* Course category */}
      <p><strong>Category:</strong> {course.category}</p>

      {/* Enroll button */}
      <button 
        onClick={() => enrollCourse(course)} // Enroll user when clicked
        disabled={isEnrolled} // Disable button if already enrolled
      >
        {/* Show "Enrolled" if already enrolled, else show "Enroll" */}
        {isEnrolled ? "Enrolled" : "Enroll"}
      </button>
    </div>
  );
};

export default CourseCard;