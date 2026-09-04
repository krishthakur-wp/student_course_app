import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    // StudentProvider wraps the whole app so that any component
    // inside can access shared student data via useContext
    <StudentProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <div className="page">
                  <h1>404 - Page Not Found</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;
