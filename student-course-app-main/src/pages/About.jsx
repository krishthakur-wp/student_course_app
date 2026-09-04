function About() {
  return (
    <div className="page">
      <h1>About This Application</h1>
      <div className="card">
        <p>
          This is a <strong>Student Course Management Application</strong>{" "}
          built using React. It was created as a practical demonstration of
          two core React concepts: routing and shared state management.
        </p>
        <ul className="about-list">
          <li>
            <strong>React Router</strong> is used for navigation between the
            Home, Courses, and About pages, as well as for dynamic course
            detail pages such as <code>/course/101</code> and{" "}
            <code>/course/102</code>.
          </li>
          <li>
            The <strong>Context API</strong> is used to manage and share
            student information (name, roll number, college, and course)
            across multiple pages/components without passing props manually
            at every level.
          </li>
          <li>
            The entire application is built using{" "}
            <strong>functional components</strong> and React Hooks such as{" "}
            <code>useContext</code> and <code>useParams</code>.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
