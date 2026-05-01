import styles from "./SubjectsCard.module.css";

export default function SubjectsCard({ student }) {
  const subjects = student.subjects || [];

  return (
    <div className="card">
      <h3>Subjects & grades</h3>

      {subjects.map((subject, index) => (
        <div key={index} className={styles.subject}>
          <div>
            <p className={styles.subjectName}>{subject.name}</p>
            <span className={styles.teacher}>{subject.teacher}</span>
          </div>
          <span className={styles.grade}>{subject.grade}</span>
        </div>
      ))}
    </div>
  );
}