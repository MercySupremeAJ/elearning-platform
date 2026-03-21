// LessonPlayer.jsx
import { useParams } from "react-router-dom"; // To read courseId from URL
import { useEnrollment } from "../store/EnrollmentContext.jsx"; // Enrollment & progress context

// Dummy lessons data for demo
const allLessons = {
  1: [
    { id: 1, title: "Intro to React" },
    { id: 2, title: "JSX & Components" },
    { id: 3, title: "State & Props" },
  ],
  2: [
    { id: 1, title: "Advanced Hooks" },
    { id: 2, title: "Context API" },
    { id: 3, title: "Performance Optimization" },
  ],
};

const LessonPlayer = () => {
  const { courseId } = useParams(); // Get courseId from URL

  // 🔹 Get enrollment info & progress from context
  const { enrolledCourses, progress, toggleLessonComplete } = useEnrollment();

  // 🔹 Check if the user is enrolled in this course
  const isEnrolled = enrolledCourses.find((c) => c.id === Number(courseId));

  // 🔹 Lessons for this course
  const lessons = allLessons[courseId] || [];

  // 🔹 Use global progress instead of local state
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
      <h2>Lessons for Course {courseId}</h2>

      {/* Progress display */}
      <p>Progress: {progressPercentage}%</p>

      {/* List of lessons */}
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id} style={{ margin: "1rem 0" }}>
            <span>{lesson.title}</span>

            {/* Checkbox to mark complete */}
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