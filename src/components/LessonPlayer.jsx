// LessonPlayer.jsx
import { useParams } from "react-router-dom"; // To read courseId from URL
import { useEnrollment } from "../store/EnrollmentContext.jsx"; // Enrollment & progress context

// 🔹 Dummy lessons data for demo
const allLessons = {
  1: [
    { id: 1, title: "Intro to React", content: "React is a JavaScript library for building UIs." },
    { id: 2, title: "JSX & Components", content: "Learn how to use JSX and build reusable components." },
    { id: 3, title: "State & Props", content: "Understand state management and passing props." },
  ],
  2: [
    { id: 1, title: "Advanced Hooks", content: "Learn useState, useEffect, useContext and more." },
    { id: 2, title: "Context API", content: "Manage global state with Context API." },
    { id: 3, title: "Performance Optimization", content: "Learn memoization, lazy loading, etc." },
  ],
};

const LessonPlayer = () => {
  const { courseId } = useParams(); // 🔹 Get courseId from URL

  // 🔹 Get enrollment info & lesson progress from context
  const { enrolledCourses, progress, toggleLessonComplete } = useEnrollment();

  // 🔹 Check if the user is enrolled in this course
  const isEnrolled = enrolledCourses.find((c) => c.id === Number(courseId));

  // 🔹 Get lessons for this course
  const lessons = allLessons[courseId] || [];

  // 🔹 Use global progress state instead of local state
  const completedLessons = progress[courseId] || [];

  // 🔹 Function to toggle lesson completion using context
  const toggleComplete = (lessonId) => toggleLessonComplete(Number(courseId), lessonId);

  // 🔹 Calculate progress percentage
  const progressPercentage = lessons.length
    ? Math.round((completedLessons.length / lessons.length) * 100)
    : 0;

  // 🔹 If user not enrolled, show message
  if (!isEnrolled) {
    return <p>You must enroll in this course to view lessons.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      {/* Course header */}
      <h2>Lessons for Course {courseId}</h2>

      {/* Progress display */}
      <p>Progress: {progressPercentage}%</p>

      {/* List of lessons */}
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id} style={{ margin: "1rem 0" }}>
            {/* Lesson title */}
            <span>{lesson.title}</span>

            {/* 🔹 Lesson content / description */}
            <p style={{ marginLeft: "1rem", fontSize: "0.9rem", color: "#555" }}>
              {lesson.content}
            </p>

            {/* 🔹 Checkbox to mark complete */}
            <input
              type="checkbox"
              checked={completedLessons.includes(lesson.id)}
              onChange={() => toggleComplete(lesson.id)}
              style={{ marginLeft: "1rem" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonPlayer;