import styles from "./UpcomingEvents.module.css";

const data = [
  { date: "26 APR", title: "PTM — Class 10 & 11", sub: "Parent-teacher meeting" },
  { date: "5 MAY", title: "Term 2 exams begin", sub: "All classes, 9:00 AM" },
  { date: "12 MAY", title: "Annual sports day", sub: "School ground" },
];

export default function UpcomingEvents() {
  return (
    <div className={`card ${styles.eventsCard}`}>
      <div className={styles.cardHeader}>
        <h3>Upcoming events</h3>
        <button type="button" className={styles.headerBtn}>View all</button>
      </div>

      {data.map((item, index) => (
        <div className={styles.eventItem} key={index}>
          <div className={styles.dateBox}>
            <span>{item.date.split(" ")[0]}</span>
            <p>{item.date.split(" ")[1]}</p>
          </div>

          <div>
            <p className={styles.title}>{item.title}</p>
            <span className={styles.sub}>{item.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}