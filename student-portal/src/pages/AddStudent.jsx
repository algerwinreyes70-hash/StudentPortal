import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent({ addStudent }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    website: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSaving(true);

    const studentData = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,

      address: {
        city: formData.city,
      },

      company: {
        name: formData.company,
      },
    };

    try {
      const newStudent = await addStudent(
        studentData
      );

      navigate(`/students/${newStudent.id}`);
    } catch (error) {
      console.error(error);
      setError(
        "Failed to add student. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="add-page">

      <div className="page-back">
        <Link to="/students">
          ← Back to Students
        </Link>
      </div>


      <div className="add-header">

        <span className="section-label">
          STUDENT MANAGEMENT
        </span>

        <h1>
          Add Student
        </h1>

        <p>
          Enter the student's information
          below to add a new student.
        </p>

      </div>


      <form
        className="student-form"
        onSubmit={handleSubmit}
      >

        <div className="form-section">

          <h2>
            Personal Information
          </h2>

          <p>
            Basic information about the student.
          </p>


          <div className="form-grid">

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="username">
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="phone">
                Phone
              </label>

              <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />

            </div>

          </div>

        </div>


        <div className="form-section">

          <h2>
            Location & Organization
          </h2>

          <p>
            Additional student information.
          </p>


          <div className="form-grid">

            <div className="form-group">

              <label htmlFor="city">
                City
              </label>

              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="company">
                Company / Organization
              </label>

              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter organization"
                required
              />

            </div>


            <div className="form-group full-width">

              <label htmlFor="website">
                Website
              </label>

              <input
                id="website"
                name="website"
                type="text"
                value={formData.website}
                onChange={handleChange}
                placeholder="example.com"
              />

            </div>

          </div>

        </div>


        {error && (
          <div className="form-error">
            {error}
          </div>
        )}


        <div className="form-actions">

          <Link
            to="/students"
            className="cancel-button"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="submit-button"
            disabled={saving}
          >
            {saving
              ? "Adding Student..."
              : "Add Student →"}
          </button>

        </div>

      </form>

    </div>
  );
}

export default AddStudent;