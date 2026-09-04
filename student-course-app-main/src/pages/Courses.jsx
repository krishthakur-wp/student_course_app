import { Link } from "react-router-dom";
import courses from "../data/courses";

function Courses() {
  return (
    <div className="page">
      <h1>Available Courses</h1>
      <p className="subtitle">
        Browse our courses below and click "View Course" to see full details.
      </p>

      <div className="course-list">
        {courses.map((course, index) => (
          <div className="card course-card" key={course.id}>
            <h2>
              {index + 1}. {course.name}
            </h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`} className="btn">
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
