import { useStudent } from "../context/StudentContext";

function Home() {
  // Access shared student information from Context API
  const student = useStudent();

  return (
    <div className="page">
      <h1>Welcome to the Student Course Management Application</h1>
      <p className="subtitle">
        Manage and explore courses with ease. This application demonstrates
        React Router for navigation and the Context API for shared state.
      </p>

      <div className="card student-card">
        <h2>Student Information</h2>
        <ul className="info-list">
          <li>
            <span className="label">Student Name:</span> {student.name}
          </li>
          <li>
            <span className="label">Roll Number:</span> {student.rollNumber}
          </li>
          <li>
            <span className="label">College:</span> {student.college}
          </li>
          <li>
            <span className="label">Enrolled Course:</span> {student.course}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
