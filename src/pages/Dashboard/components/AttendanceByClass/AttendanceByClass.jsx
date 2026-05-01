import styles from "./AttendanceByClass.module.css";

const data = [
  { class: "Class 10", percent: 96, color: "green" },
  { class: "Class 9", percent: 91, color: "green" },
  { class: "Class 8", percent: 88, color: "orange" },
  { class: "Class 7", percent: 85, color: "orange" },
  { class: "Class 6", percent: 79, color: "red" },
  { class: "Class 5", percent: 93, color: "green" },
];

export default function AttendanceByClass() {
  return (
    <div className={`card ${styles.attendanceCard}`}>
      <div className={styles.cardHeader}>
        <h3>Attendance by class</h3>
        <button type="button" className={styles.headerBtn}>Full report</button>
      </div>

      {data.map((item, index) => (
        <div className={styles.attendanceRow} key={index}>
          <p className={styles.className}>{item.class}</p>

          <div className={styles.bar}>
            <div
              className={`${styles.fill} ${styles[item.color]}`}
              style={{ width: `${item.percent}%` }}
            />
          </div>

          <span className={styles.percent}>{item.percent}%</span>
        </div>
      ))}
    </div>
  );
}