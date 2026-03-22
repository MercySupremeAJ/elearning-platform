// Import course data
import courses from "../data/courses";

// Import CourseCard component
import CourseCard from "../components/CourseCard";

// Import navigation hook
import { useNavigate } from "react-router-dom";

const Courses = () => {
  // ✅ Hook MUST be inside component
  const navigate = useNavigate();

  // 🔹 Step 1: Group courses by category
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }

    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>

      {/* 🔹 Dashboard Button */}
      <button onClick={() => navigate("/dashboard")}>
        Go to Dashboard
      </button>

      {/* 🔹 Step 2: Loop through categories */}
      {Object.keys(groupedCourses).map((category) => (
        <div key={category}>
          
          {/* Category Title */}
          <h3 style={{ marginTop: "2rem", color: "blue" }}>
            {category}
          </h3>

          {/* 🔹 Step 3: Render courses */}
          {groupedCourses[category].map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;