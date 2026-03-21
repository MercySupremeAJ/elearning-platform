import courses from "../data/courses";

const Courses = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Available Courses</h2>

      {courses.map((course) => (
        <div key={course.id} style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <button>Enroll</button>
        </div>
      ))}
    </div>
  );
};

export default Courses;