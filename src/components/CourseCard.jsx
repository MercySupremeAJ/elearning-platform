const CourseCard = ({ course }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem" }}>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <button>Enroll</button>
    </div>
  );
};

export default CourseCard;