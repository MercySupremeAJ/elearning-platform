import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  // Step 1: Group courses by category
  const groupedCourses = courses.reduce((acc, course) => {
    // If category does not exist, create it
    if (!acc[course.category]) {
      acc[course.category] = [];
    }

    // Push course into its category
    acc[course.category].push(course);

    return acc;
  }, {});

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>

      {/* Step 2: Loop through each category */}
      {Object.keys(groupedCourses).map((category) => (
        <div key={category}>
          
          {/* Category Title */}
          <h3 style={{ marginTop: "2rem", color: "blue" }}>
            {category}
          </h3>

          {/* Step 3: Render courses inside each category */}
          {groupedCourses[category].map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;