import { createContext, useContext } from "react";

// 1. Create the Context
const StudentContext = createContext();

// 2. Shared student data (in a real app this could come from an API or login system)
const studentData = {
  name: "Rahul Kumar",
  rollNumber: "101",
  college: "ABC Engineering College",
  course: "Full Stack Development",
};

// 3. Provider component that makes the student data available
// to every component in the tree below it
export function StudentProvider({ children }) {
  return (
    <StudentContext.Provider value={studentData}>
      {children}
    </StudentContext.Provider>
  );
}

// 4. Custom hook for easy access to the context in any component
export function useStudent() {
  return useContext(StudentContext);
}

export default StudentContext;
