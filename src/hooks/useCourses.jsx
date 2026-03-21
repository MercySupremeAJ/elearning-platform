import { useState } from "react";

export const useCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enroll = (course) => {
    // Prevent duplicate enrollment
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return { enrolledCourses, enroll };
};