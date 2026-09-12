import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";

function App() {
  // =========================
  // STUDENT STATE
  // =========================

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // =========================
  // GET STUDENTS FROM API
  // =========================

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error("API Error:", error);

        setError(
          "Failed to load student data."
        );

        setLoading(false);
      });
  }, []);


  // =========================
  // ADD STUDENT
  // =========================

  const addStudent = async (studentData) => {
    try {

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        studentData
      );


      // JSONPlaceholder returns a fake
      // ID for the new student.
      // We create our own ID so it
      // works correctly in this app.

      const newStudent = {
        ...response.data,

        id: students.length + 1,
      };


      // Add the new student to the
      // existing React state.

      setStudents((previousStudents) => [
        ...previousStudents,
        newStudent,
      ]);


      // Return the student so that
      // AddStudent.jsx can navigate
      // to its details page.

      return newStudent;

    } catch (error) {

      console.error(
        "Add Student Error:",
        error
      );

      throw error;
    }
  };


  // =========================
  // APPLICATION
  // =========================

  return (
    <>
      {/* NAVIGATION */}

      <Navbar />


      {/* PAGE ROUTES */}

      <main>

        <Routes>

          {/* =====================
              HOME PAGE
          ====================== */}

          <Route
            path="/"
            element={
              <Home
                students={students}
              />
            }
          />


          {/* =====================
              STUDENTS PAGE
          ====================== */}

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


          {/* =====================
              ADD STUDENT PAGE
          ====================== */}

          <Route
            path="/add-student"
            element={
              <AddStudent
                addStudent={addStudent}
              />
            }
          />


          {/* =====================
              STUDENT DETAILS PAGE
          ====================== */}

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