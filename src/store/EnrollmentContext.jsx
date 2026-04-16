import { createContext, useState, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import courses from "../data/courses.js";

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const { user } = useAuth();

  const [enrolledCoursesData, setEnrolledCoursesData] = useState(() => {
    return JSON.parse(localStorage.getItem("enrolled_users")) || {};
  });

  const [progress, setProgress] = useState(() => {
    localStorage.removeItem("progress"); // Force wipe legacy primary key collision
    return {};
  });

  const [answers, setAnswers] = useState(() => {
    localStorage.removeItem("answers"); // Force wipe legacy quiz schema
    return {};
  });

  // Derived state: Map strictly to live DB courses to purge legacy local storage bugs
  const rawEnrolled = user ? (enrolledCoursesData[user.username] || []) : [];
  const enrolledCourses = rawEnrolled
    .map(saved => courses.find(c => c.id === saved.id))
    .filter(Boolean);

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

  const toggleLessonComplete = (courseId, lessonId, quizAnswer = "") => {
    if (!user) return;

    setProgress((prev) => {
      const userProgress = prev[user.username] || {};
      const courseProgress = userProgress[courseId] || [];

      // If it exists, remove it (undo)
      if (courseProgress.includes(lessonId)) {
        const updatedCourse = courseProgress.filter((id) => id !== lessonId);
        const updated = { ...prev, [user.username]: { ...userProgress, [courseId]: updatedCourse } };
        localStorage.setItem("progress", JSON.stringify(updated));
        return updated;
      }

      // If it doesn't exist, add it and save the answer
      const updatedCourse = [...courseProgress, lessonId];
      const updated = { ...prev, [user.username]: { ...userProgress, [courseId]: updatedCourse } };
      localStorage.setItem("progress", JSON.stringify(updated));
      
      // Save Answer
      if (quizAnswer) {
        setAnswers(prevAns => {
          const userAns = prevAns[user.username] || {};
          const courseAns = userAns[courseId] || {};
          const updatedAns = { ...prevAns, [user.username]: { ...userAns, [courseId]: { ...courseAns, [lessonId]: quizAnswer } } };
          localStorage.setItem("answers", JSON.stringify(updatedAns));
          return updatedAns;
        });
      }

      return updated;
    });
  };

  const resetCourseProgress = (courseId) => {
    if (!user) return;
    setProgress((prev) => {
      const userProgress = prev[user.username] || {};
      const updated = { ...prev, [user.username]: { ...userProgress, [courseId]: [] } };
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
        answers,
        resetCourseProgress
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollment = () => useContext(EnrollmentContext);