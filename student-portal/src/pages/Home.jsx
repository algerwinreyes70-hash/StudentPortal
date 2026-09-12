import { Link } from "react-router-dom";

function Home({ students }) {

  const availableStudents = students.filter(
    (student) => student.id > 0
  );

  return (
    <div className="home-page">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-label">
            STUDENT MANAGEMENT SYSTEM
          </div>

          <h1>
            Simple.
            <br />

            <span>Smart.</span>
            <br />

            Student Management.
          </h1>

          <p>
            A modern React student portal that
            retrieves and displays student information
            from a REST API.
          </p>

          <div className="hero-buttons">

            <Link
              to="/students"
              className="primary-button"
            >
              View Students
              <span>→</span>
            </Link>

            <a
              href="https://jsonplaceholder.typicode.com/users"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              View API
            </a>

          </div>

        </div>

        {/* HERO DATA CARD */}

        <div className="hero-card">

          <div className="hero-card-header">

            <span>
              STUDENT DATA
            </span>

            <div className="online-dot"></div>

          </div>

          <div className="hero-number">
            {availableStudents.length}
          </div>

          <div className="hero-card-text">
            Students available
          </div>

          <div className="hero-line"></div>

          <div className="hero-status">
            <span>●</span>
            API Connected
          </div>

        </div>

      </section>


      {/* STATISTICS */}

      <section className="stats-section">

        <div className="stat-box">

          <span className="stat-icon">
            👨‍🎓
          </span>

          <div>
            <strong>
              {students.length}
            </strong>

            <p>
              Total Students
            </p>
          </div>

        </div>


        <div className="stat-box">

          <span className="stat-icon">
            🌐
          </span>

          <div>
            <strong>
              API
            </strong>

            <p>
              Data Source
            </p>
          </div>

        </div>


        <div className="stat-box">

          <span className="stat-icon">
            ⚡
          </span>

          <div>
            <strong>
              React
            </strong>

            <p>
              Frontend
            </p>
          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section className="info-section">

        <div>

          <span className="section-label">
            ABOUT THE PORTAL
          </span>

          <h2>
            Everything you need to
            view student information.
          </h2>

        </div>

        <p>
          The Student Portal uses React components,
          props, state, events, Axios, React Router,
          map(), and filter() to create a simple
          and responsive student management interface.
        </p>

      </section>

    </div>
  );
}

export default Home;