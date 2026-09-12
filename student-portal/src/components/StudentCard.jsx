function StudentCard({ student }) {
  const firstLetter = student.name
    .charAt(0)
    .toUpperCase();

  return (
    <article className="student-card">

      <div className="student-top">

        <div className="student-avatar">
          {firstLetter}
        </div>

        <div className="student-title">
          <h3>{student.name}</h3>

          <span>
            @{student.username}
          </span>
        </div>

      </div>

      <div className="student-details">

        <div className="detail-row">
          <span className="detail-label">
            Email
          </span>

          <span className="detail-value">
            {student.email}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">
            Phone
          </span>

          <span className="detail-value">
            {student.phone}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">
            Location
          </span>

          <span className="detail-value">
            {student.address.city}
          </span>
        </div>

        <div className="detail-row">
          <span className="detail-label">
            Company
          </span>

          <span className="detail-value">
            {student.company.name}
          </span>
        </div>

      </div>

      <div className="student-footer">

        <span className="student-id">
          ID #{student.id}
        </span>

        <a
          href={`https://${student.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="website-btn"
        >
          Website →
        </a>

      </div>

    </article>
  );
}

export default StudentCard;