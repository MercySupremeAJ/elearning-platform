import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;