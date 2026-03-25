// LessonPlayer.jsx
import { useParams } from "react-router-dom";
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useAuth } from "../hooks/useAuth"; // ✅ ADD THIS
import lessons from "../data/lessons.js";

const LessonPlayer = () => {
  const { courseId } = useParams();
  const { enrolledCourses, progress, toggleLessonComplete } = useEnrollment();
  const { user } = useAuth(); // ✅ GET CURRENT USER

  const isEnrolled = enrolledCourses.find((c) => c.id === Number(courseId));

  const courseLessons = lessons[courseId] || [];

  // ✅ FIXED (user-based progress)
  const completedLessons = progress[user?.username]?.[courseId] || [];

  const toggleComplete = (lessonId) =>
    toggleLessonComplete(Number(courseId), lessonId);

  const progressPercentage = courseLessons.length
    ? Math.round((completedLessons.length / courseLessons.length) * 100)
    : 0;

  if (!isEnrolled) {
    return <p>You must enroll in this course to view lessons.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Lessons for Course {courseId}</h2>

      <p>Progress: {progressPercentage}%</p>

      <ul>
        {courseLessons.map((lesson) => (
          <li key={lesson.id} style={{ margin: "1rem 0" }}>
            <span>{lesson.title}</span>

            <p style={{ marginLeft: "1rem", color: "#555" }}>
              {lesson.content}
            </p>

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