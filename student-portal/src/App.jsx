import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";

function App() {
  // =====================================================
  // STUDENT STATE
  // =====================================================

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================================
  // GET STUDENTS FROM API
  // =====================================================

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );

        setStudents(response.data);
      } catch (error) {
        console.error("API Error:", error);

        setError(
          "Failed to load student data. Please check your internet connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // =====================================================
  // ADD STUDENT
  // =====================================================

  const addStudent = async (studentData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        studentData
      );

      // Get the highest existing student ID
      const highestId = students.reduce(
        (maxId, student) =>
          Math.max(maxId, Number(student.id)),
        0
      );

      // Create the new student
      const newStudent = {
        ...response.data,
        id: highestId + 1,
      };

      // Add the new student to the current list
      setStudents((previousStudents) => [
        ...previousStudents,
        newStudent,
      ]);

      // Return the new student
      // so AddStudent.jsx can open the details page
      return newStudent;
    } catch (error) {
      console.error("Add Student Error:", error);

      throw error;
    }
  };

  // =====================================================
  // APPLICATION
  // =====================================================

  return (
    <>
      {/* NAVIGATION */}
      <Navbar />

      {/* PAGE ROUTES */}
      <main>
        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <Home
                students={students}
              />
            }
          />

          {/* STUDENTS PAGE */}
          <Route
            path="/students"
            element={
              <Students
                students={students}
                loading={loading}
                error={error}
              />
            }
          />

          {/* ADD STUDENT PAGE */}
          <Route
            path="/add-student"
            element={
              <AddStudent
                addStudent={addStudent}
              />
            }
          />

          {/* STUDENT DETAILS PAGE */}
          <Route
            path="/students/:id"
            element={
              <StudentDetails
                students={students}
              />
            }
          />

        </Routes>
      </main>
    </>
  );
}

export default App;