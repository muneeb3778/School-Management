import styles from "./StudentTabs.module.css";

export default function StudentTabs() {
  return (
    <div className={styles.tabs}>
      <button type="button" className={styles.active}>Overview</button>
      <button type="button" className={styles.tabBtn}>Attendance</button>
      <button type="button" className={styles.tabBtn}>Academics</button>
      <button type="button" className={styles.tabBtn}>Fee history</button>
      <button type="button" className={styles.tabBtn}>Documents</button>
    </div>
  );
}