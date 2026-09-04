import { useParams, Link } from "react-router-dom";
import courses from "../data/courses";

function CourseDetails() {
  // Retrieve the dynamic :id parameter from the URL (e.g. /course/101)
  const { id } = useParams();

  // Find the matching course from our shared course data
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="page">
        <h1>Course Not Found</h1>
        <p>No course exists with ID: {id}</p>
        <Link to="/courses" className="btn">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Course Details</h1>
      <div className="card">
        <p>
          <span className="label">Course ID:</span> {course.id}
        </p>
        <p>
          <span className="label">Course Name:</span> {course.name}
        </p>
        <p>
          <span className="label">Duration:</span> {course.duration}
        </p>
        <p>
          <span className="label">Instructor:</span> {course.instructor}
        </p>
        <p>
          <span className="label">Description:</span> {course.description}
        </p>
        <Link to="/courses" className="btn">
          Back to Courses
        </Link>
      </div>
    </div>
  );
}

export default CourseDetails;
