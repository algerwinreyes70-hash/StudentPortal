import { Link, useParams } from "react-router-dom";

function StudentDetails({ students }) {
  const { id } = useParams();

  const student = students.find(
    (student) =>
      String(student.id) === String(id)
  );

  if (!student) {
    return (
      <div className="details-page">

        <div className="message-box">

          <div className="message-icon">
            ?
          </div>

          <h3>
            Student Not Found
          </h3>

          <p>
            The student you are looking for
            does not exist.
          </p>

          <Link
            to="/students"
            className="primary-button details-back-button"
          >
            ← Back to Students
          </Link>

        </div>

      </div>
    );
  }

  const firstLetter = student.name
    .charAt(0)
    .toUpperCase();

  return (
    <div className="details-page">

      <Link
        to="/students"
        className="back-link"
      >
        ← Back to Students
      </Link>


      <div className="details-container">

        {/* PROFILE HEADER */}

        <div className="details-profile">

          <div className="large-avatar">
            {firstLetter}
          </div>

          <div className="profile-info">

            <span className="profile-label">
              STUDENT PROFILE
            </span>

            <h1>
              {student.name}
            </h1>

            <p>
              @{student.username}
            </p>

          </div>

          <div className="profile-id">
            ID #{student.id}
          </div>

        </div>


        {/* CONTACT INFORMATION */}

        <div className="details-section">

          <div className="details-section-title">

            <span>
              01
            </span>

            <div>
              <h2>
                Contact Information
              </h2>

              <p>
                Student communication details.
              </p>
            </div>

          </div>


          <div className="details-grid">

            <div className="detail-card">

              <span className="detail-card-label">
                Email
              </span>

              <strong>
                {student.email}
              </strong>

            </div>


            <div className="detail-card">

              <span className="detail-card-label">
                Phone
              </span>

              <strong>
                {student.phone}
              </strong>

            </div>


            <div className="detail-card">

              <span className="detail-card-label">
                Website
              </span>

              <strong>
                {student.website}
              </strong>

            </div>


            <div className="detail-card">

              <span className="detail-card-label">
                City
              </span>

              <strong>
                {student.address.city}
              </strong>

            </div>

          </div>

        </div>


        {/* ADDRESS */}

        <div className="details-section">

          <div className="details-section-title">

            <span>
              02
            </span>

            <div>
              <h2>
                Address
              </h2>

              <p>
                Student location information.
              </p>
            </div>

          </div>


          <div className="address-box">

            <div>
              <span>
                Street
              </span>

              <strong>
                {student.address.street}
              </strong>
            </div>

            <div>
              <span>
                Suite
              </span>

              <strong>
                {student.address.suite}
              </strong>
            </div>

            <div>
              <span>
                City
              </span>

              <strong>
                {student.address.city}
              </strong>
            </div>

            <div>
              <span>
                ZIP Code
              </span>

              <strong>
                {student.address.zipcode}
              </strong>
            </div>

          </div>

        </div>


        {/* ORGANIZATION */}

        <div className="details-section">

          <div className="details-section-title">

            <span>
              03
            </span>

            <div>
              <h2>
                Organization
              </h2>

              <p>
                Student organization information.
              </p>
            </div>

          </div>


          <div className="company-box">

            <div className="company-icon">
              {student.company.name
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>

              <span>
                Organization
              </span>

              <h3>
                {student.company.name}
              </h3>

              <p>
                {student.company.catchPhrase}
              </p>

            </div>

          </div>

        </div>


        {/* WEBSITE */}

        <div className="details-actions">

          <a
            href={`https://${student.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Visit Website →
          </a>

          <Link
            to="/students"
            className="secondary-button"
          >
            Back to Students
          </Link>

        </div>

      </div>

    </div>
  );
}

export default StudentDetails;