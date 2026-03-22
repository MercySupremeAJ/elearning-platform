// Import enrollment context
import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";
import lessonsData from "../data/lessons";

const Dashboard = () => {
  const { enrolledCourses, progress } = useEnrollment();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Learning Dashboard</h2>

      {/* If no courses enrolled */}
      {enrolledCourses.length === 0 && <p>No courses enrolled yet.</p>}

      {/* Loop through enrolled courses */}
      {enrolledCourses.map((course) => {
        // Get completed lessons for this course
        const completed = progress[course.id] || [];

        // total lessons
        const totalLessons = (lessonsData[course.id] || []).length;

        // Calculate progress %
        const percent = Math.round((completed.length / totalLessons) * 100);

        return (
          <div key={course.id} style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
            
            {/* Course Title */}
            <h3>{course.title}</h3>

            {/* Progress */}
            <p>Progress: {percent}%</p>

            {/* Go back to lessons */}
            <button onClick={() => navigate(`/lesson/${course.id}`)}>
              Continue Learning
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;