import styles from "./StudentHeader.module.css";
import { useMemo } from "react";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function StudentHeader({ student }) {
  const initials = useMemo(() => getInitials(student?.name || ""), [student?.name]);

  return (
    <div className={`card ${styles.studentHeader}`}>
      <div className={styles.left}>
        <div className={styles.avatarBig}>{initials}</div>

        <div>
          <h2 className={styles.name}>{student.name}</h2>

          <div className={styles.tags}>
            <span className={styles.tag}>#{student.id}</span>
            <span className={styles.tag}>Class {student.class.replace(/-\s*/, "-")}</span>
            <span className={`${styles.tag} ${student.fee === "Paid" ? styles.active : styles.pending}`}>
              {student.fee === "New" ? "New" : "Active"}
            </span>
            <span className={styles.tag}>Roll No. {student.rollNo}</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.metric}>
          <h3>{student.attendance}%</h3>
          <p>Attendance</p>
        </div>

        <div className={styles.metric}>
          <h3>{student.avgGrade}</h3>
          <p>Avg grade</p>
        </div>

        <div className={styles.metric}>
          <h3 className={student.fee === "Paid" ? styles.paid : student.fee === "Due" ? styles.due : styles.new}>
            {student.fee}
          </h3>
          <p>Fee status</p>
        </div>
      </div>
    </div>
  );
}