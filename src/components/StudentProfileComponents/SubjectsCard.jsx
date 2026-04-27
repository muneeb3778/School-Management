import "../../styles/StudentsProfileComponentsStyles/SubjectsCard.css";

export default function SubjectsCard() {
  return (
    <div className="card">
      <h3>Subjects & grades</h3>

      <div className="subject">
        <div>
          <p>Mathematics</p>
          <span>Mr. Verma</span>
        </div>
        <span>A+</span>
      </div>

      <div className="subject">
        <div>
          <p>Science</p>
          <span>Ms. Sharma</span>
        </div>
        <span>A</span>
      </div>

      <div className="subject">
        <div>
          <p>English</p>
          <span>Mr. D’Souza</span>
        </div>
        <span>B+</span>
      </div>
    </div>
  );
}