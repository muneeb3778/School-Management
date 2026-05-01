import styles from "./RecentActivity.module.css";

const data = [
  { text: "Fee paid — Rahul Sharma", time: "10 min ago", color: "green" },
  { text: "Admission — Priya Mehta (6A)", time: "1 hr ago", color: "blue" },
  { text: "Leave request — Mr. Suresh", time: "2 hrs ago", color: "orange" },
  { text: "Due reminder — 42 students", time: "9:00 AM today", color: "red" },
  { text: "Timetable updated — Class 10", time: "Yesterday", color: "green" },
];

export default function RecentActivity() {
  return (
    <div className={`card ${styles.activityCard}`}>
      <div className={styles.cardHeader}>
        <h3>Recent activity</h3>
        <button type="button" className={styles.headerBtn}>View all</button>
      </div>

      {data.map((item, index) => (
        <div className={styles.activityItem} key={index}>
          <div className={`${styles.iconBox} ${styles[item.color]}`}>
            <span className={styles.dot} />
          </div>

          <div>
            <p className={styles.text}>{item.text}</p>
            <span className={styles.time}>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}