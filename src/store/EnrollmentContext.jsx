import { createContext, useState, useContext } from "react";

// Create Enrollment Context
const EnrollmentContext = createContext();

// Provider to wrap app
export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // Function to enroll in a course
  const enrollCourse = (course) => {
    // Avoid duplicate enrollment
    setEnrolledCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  // Function to unenroll
  const unenrollCourse = (courseId) => {
    setEnrolledCourses((prev) => prev.filter((c) => c.id !== courseId));
  };

  return (
    <EnrollmentContext.Provider
      value={{ enrolledCourses, enrollCourse, unenrollCourse }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

// Custom hook to use enrollment context
export const useEnrollment = () => useContext(EnrollmentContext);