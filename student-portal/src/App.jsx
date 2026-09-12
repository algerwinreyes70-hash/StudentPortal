import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError("Failed to load student data.");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home students={students} />}
          />

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
        </Routes>
      </main>
    </>
  );
}

export default App;