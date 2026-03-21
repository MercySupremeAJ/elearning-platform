import React from "react";
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { enrolledCourses, enrollCourse } = useEnrollment();
  const navigate = useNavigate();

  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button
        onClick={() => {
          enrollCourse(course);
          // 🔹 Navigate to lessons after enrolling
          navigate(`/courses/${course.id}/lessons`);
        }}
        disabled={isEnrolled} // Disable button if already enrolled
      >
        {isEnrolled ? "Enrolled" : "Enroll & Go to Lessons"}
      </button>
    </div>
  );
};

export default CourseCard;