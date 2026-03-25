import { useEnrollment } from "../store/EnrollmentContext.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const { enrolledCourses } = useEnrollment();
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="nav-header" style={{ marginTop: "2rem" }}>
        <div>
          <h1 style={{ margin: 0 }}>My Active Courses</h1>
          <p className="text-dim mt-1">Pick up right where you left off.</p>
        </div>
        <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>
          &larr; Back to Dashboard
        </button>
      </header>

      {enrolledCourses.length === 0 ? (
        <div className="glass-panel text-center" style={{ marginTop: "4rem", padding: "4rem 2rem" }}>
          <h2 style={{ fontSize: "2rem" }}>You are not enrolled in any courses yet.</h2>
          <p className="text-dim mb-2 mt-1" style={{ fontSize: "1.2rem" }}>Explore our catalog to start learning.</p>
          <button className="btn btn-primary" onClick={() => navigate("/courses")} style={{ fontSize: "1.1rem", padding: "1rem 2rem" }}>
            Browse Catalog
          </button>
        </div>
      ) : (
        <div className="course-grid" style={{ marginTop: "2rem" }}>
          {enrolledCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;