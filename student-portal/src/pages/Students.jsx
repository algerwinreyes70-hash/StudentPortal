import { useState } from "react";

import SearchBar from "../components/SearchBar";
import StudentCard from "../components/StudentCard";

function Students({
  students,
  loading,
  error
}) {

  const [searchTerm, setSearchTerm] = useState("");


  // FILTER STUDENTS

  const filteredStudents = students.filter(
    (student) => {

      const search =
        searchTerm.toLowerCase().trim();

      return (
        student.name
          .toLowerCase()
          .includes(search) ||

        student.username
          .toLowerCase()
          .includes(search) ||

        student.email
          .toLowerCase()
          .includes(search) ||

        student.address.city
          .toLowerCase()
          .includes(search) ||

        student.company.name
          .toLowerCase()
          .includes(search)
      );
    }
  );


  return (
    <div className="students-page">

      {/* PAGE HEADER */}

      <section className="students-header">

        <div>

          <span className="section-label">
            STUDENT DIRECTORY
          </span>

          <h1>
            Students
          </h1>

          <p>
            Browse and search all students
            retrieved from the API.
          </p>

        </div>


        <div className="total-badge">

          <strong>
            {students.length}
          </strong>

          <span>
            Students
          </span>

        </div>

      </section>


      {/* SEARCH */}

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />


      {/* LOADING */}

      {loading && (
        <div className="message-box">

          <div className="loader"></div>

          <p>
            Loading students...
          </p>

        </div>
      )}


      {/* ERROR */}

      {!loading && error && (
        <div className="message-box error">

          <div className="message-icon">
            !
          </div>

          <h3>
            Unable to load students
          </h3>

          <p>
            {error}
          </p>

        </div>
      )}


      {/* STUDENT RESULTS */}

      {!loading && !error && (
        <>

          <div className="results-info">

            <span>
              Showing{" "}
              <strong>
                {filteredStudents.length}
              </strong>{" "}
              of{" "}
              <strong>
                {students.length}
              </strong>{" "}
              students
            </span>

            {searchTerm && (
              <span>
                Search:{" "}
                <strong>
                  "{searchTerm}"
                </strong>
              </span>
            )}

          </div>


          {/* MAP STUDENTS */}

          {filteredStudents.length > 0 ? (

            <div className="students-grid">

              {filteredStudents.map(
                (student) => (
                  <StudentCard
                    key={student.id}
                    student={student}
                  />
                )
              )}

            </div>

          ) : (

            <div className="message-box">

              <div className="message-icon">
                🔍
              </div>

              <h3>
                No students found
              </h3>

              <p>
                Try searching with another
                name, username, email,
                or location.
              </p>

            </div>

          )}

        </>
      )}

    </div>
  );
}

export default Students;