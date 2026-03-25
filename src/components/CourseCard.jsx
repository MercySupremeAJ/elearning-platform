import { useEnrollment } from "../store/EnrollmentContext.jsx";
import { useNavigate } from "react-router-dom";
import lessonsData from "../data/lessons"; 

const CourseCard = ({ course }) => {
  const { enrolledCourses, enrollCourse, progress } = useEnrollment();
  const navigate = useNavigate();

  const isEnrolled = enrolledCourses.find((c) => c.id === course.id);

  const totalLessons = lessonsData[course.id]?.length || 0;
  const completedLessons = progress[course.id]?.length || 0;
  const miniProgress = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

  let progressClass = "low";
  if (miniProgress >= 75) progressClass = "high";
  else if (miniProgress >= 40) progressClass = "medium";

  return (
    <div className="course-card">
      <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{course.title}</h3>
      <p>{course.description}</p>

      {isEnrolled && (
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "0.3rem" }}>
            <span className="text-dim">Progress</span>
            <span style={{ fontWeight: 600, color: "var(--text-h)" }}>{miniProgress}%</span>
          </div>
          <div className="progress-track">
            <div 
              className={`progress-fill ${progressClass}`} 
              style={{ width: `${miniProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="course-card-actions">
        {!isEnrolled ? (
          <button
            className="btn btn-primary"
            style={{ width: "100%" }}
            onClick={() => enrollCourse(course)}
          >
            Enroll Now
          </button>
        ) : (
          <>
            <button
              className="btn btn-disabled"
              style={{ flex: 1 }}
              disabled
            >
              Enrolled
            </button>
            <button
              className="btn btn-success"
              style={{ flex: 1 }}
              onClick={() => navigate(`/lesson/${course.id}`)}
            >
              Learn
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CourseCard;