import styles from "./AttendanceCard.module.css";

export default function AttendanceCard({ student }) {
  const getFillClass = (value) => {
    if (value >= 90) return styles.green;
    if (value >= 80) return styles.orange;
    return styles.red;
  };

  const weeks = student.attendanceByWeek || [];

  return (
    <div className={`card ${styles.attendanceCard}`}>
      <h3 className={styles.heading}>Attendance — this month</h3>

      {weeks.map((item, index) => (
        <div className={styles.progressRow} key={index}>
          <p className={styles.week}>{item.week}</p>

          <div className={styles.progressBar}>
            <span
              className={`${styles.progressFill} ${getFillClass(item.percent)}`}
              style={{ width: `${item.percent}%` }}
            />
          </div>

          <span className={styles.percent}>{item.percent}%</span>
        </div>
      ))}
    </div>
  );
}