// EnrollmentContext.jsx
import { createContext, useState, useContext } from "react";

// 🔹 Create Enrollment Context
const EnrollmentContext = createContext();

// 🔹 Provider to wrap the app
export const EnrollmentProvider = ({ children }) => {
  // State to keep track of enrolled courses
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // 🔹 New state: track completed lessons per course
  // Structure: { [courseId]: [lessonId1, lessonId2, ...] }
  const [progress, setProgress] = useState({});

  // 🔹 Function to enroll in a course
  const enrollCourse = (course) => {
    setEnrolledCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;
      return [...prev, course];
    });
  };

  // 🔹 Function to unenroll from a course
  const unenrollCourse = (courseId) => {
    setEnrolledCourses((prev) => prev.filter((c) => c.id !== courseId));

    // Remove progress when unenrolling
    setProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[courseId];
      return newProgress;
    });
  };

  // 🔹 Function to toggle lesson completion
  const toggleLessonComplete = (courseId, lessonId) => {
    setProgress((prev) => {
      const courseProgress = prev[courseId] || [];
      const isCompleted = courseProgress.includes(lessonId);

      return {
        ...prev,
        [courseId]: isCompleted
          ? courseProgress.filter((id) => id !== lessonId) // uncheck
          : [...courseProgress, lessonId], // check
      };
    });
  };

  return (
    <EnrollmentContext.Provider
      value={{
        enrolledCourses,
        enrollCourse,
        unenrollCourse,
        progress,
        toggleLessonComplete, // expose to LessonPlayer
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

// 🔹 Custom hook to use the enrollment context
export const useEnrollment = () => useContext(EnrollmentContext);