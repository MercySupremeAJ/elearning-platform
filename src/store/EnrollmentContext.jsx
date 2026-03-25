import { createContext, useState, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const { user } = useAuth();

  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    return JSON.parse(localStorage.getItem("courses")) || [];
  });

  const [progress, setProgress] = useState(() => {
    return JSON.parse(localStorage.getItem("progress")) || {};
  });

  const enrollCourse = (course) => {
    setEnrolledCourses((prev) => {
      if (prev.find((c) => c.id === course.id)) return prev;

      const updated = [...prev, course];
      localStorage.setItem("courses", JSON.stringify(updated));
      return updated;
    });
  };

  const unenrollCourse = (courseId) => {
    setEnrolledCourses((prev) => {
      const updated = prev.filter((c) => c.id !== courseId);
      localStorage.setItem("courses", JSON.stringify(updated));
      return updated;
    });
  };

  const toggleLessonComplete = (courseId, lessonId) => {
    if (!user) return;

    setProgress((prev) => {
      const userProgress = prev[user.username] || {};
      const courseProgress = userProgress[courseId] || [];

      const updatedCourse = courseProgress.includes(lessonId)
        ? courseProgress.filter((id) => id !== lessonId)
        : [...courseProgress, lessonId];

      const updated = {
        ...prev,
        [user.username]: {
          ...userProgress,
          [courseId]: updatedCourse,
        },
      };

      localStorage.setItem("progress", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <EnrollmentContext.Provider
      value={{
        enrolledCourses,
        enrollCourse,
        unenrollCourse,
        progress,
        toggleLessonComplete,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollment = () => useContext(EnrollmentContext);