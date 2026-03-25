import { createContext, useState, useContext } from "react";
import { useAuth } from "../hooks/useAuth";

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const { user } = useAuth();

  const [enrolledCoursesData, setEnrolledCoursesData] = useState(() => {
    return JSON.parse(localStorage.getItem("enrolled_users")) || {};
  });

  const [progress, setProgress] = useState(() => {
    return JSON.parse(localStorage.getItem("progress")) || {};
  });

  // Derived state for the currently logged-in user
  const enrolledCourses = user ? (enrolledCoursesData[user.username] || []) : [];

  const enrollCourse = (course) => {
    if (!user) return;
    setEnrolledCoursesData((prev) => {
      const userCourses = prev[user.username] || [];
      if (userCourses.find((c) => c.id === course.id)) return prev;

      const updatedUserCourses = [...userCourses, course];
      const updated = { ...prev, [user.username]: updatedUserCourses };
      localStorage.setItem("enrolled_users", JSON.stringify(updated));
      return updated;
    });
  };

  const unenrollCourse = (courseId) => {
    if (!user) return;
    setEnrolledCoursesData((prev) => {
      const userCourses = prev[user.username] || [];
      const updatedUserCourses = userCourses.filter((c) => c.id !== courseId);
      const updated = { ...prev, [user.username]: updatedUserCourses };
      localStorage.setItem("enrolled_users", JSON.stringify(updated));
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