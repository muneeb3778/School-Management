import styles from "./AcademicsTabs.module.css";

const tabs = ["Timetable", "Subjects", "Exams", "Results", "Homework"];

export default function AcademicsTabs({ active, onChange }) {
  return (
    <div className={styles.tabs}>
      {tabs.map((t) => (
        <button
          key={t}
          type="button"
          className={`${styles.tab} ${active === t ? styles.active : ""}`}
          onClick={() => onChange(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );
}