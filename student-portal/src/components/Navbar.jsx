import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <NavLink to="/" className="logo">
          <span className="logo-icon">S</span>

          <span className="logo-text">
            Student Portal
          </span>
        </NavLink>

        <nav className="nav-links">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Students
          </NavLink>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;