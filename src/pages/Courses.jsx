import courses from "../data/courses"; 
import CourseCard from "../components/CourseCard"; 
import { useNavigate } from "react-router-dom"; 

const Courses = () => {
  const navigate = useNavigate(); 

  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <div className="container">
      <header className="nav-header" style={{ marginTop: "2rem" }}>
        <div>
          <h1 style={{ margin: 0 }}>Course Catalog</h1>
          <p className="text-dim mt-1">Discover structured, world-class content.</p>
        </div>
        <button className="btn btn-outline" onClick={() => navigate("/dashboard")}>
          &larr; Back to Dashboard
        </button>
      </header>

      {Object.keys(groupedCourses).map((category) => (
        <div key={category} style={{ marginBottom: "3rem" }}>
          <h2 className="category-title">{category}</h2>
          <div className="course-grid">
            {groupedCourses[category].map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;