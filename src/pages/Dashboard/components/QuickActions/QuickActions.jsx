import styles from "./QuickActions.module.css";
import { UserPlus, Wallet, CalendarCheck, Send } from "lucide-react";

export default function QuickActions() {
  return (
    <div className={`card ${styles.quickCard}`}>
      <h3 className={styles.heading}>Quick actions</h3>

      <div className={styles.quickGrid}>
        <div className={`${styles.quickItem} ${styles.purple}`}>
          <UserPlus size={20} />
          <p>Add student</p>
        </div>

        <div className={`${styles.quickItem} ${styles.green}`}>
          <Wallet size={20} />
          <p>Collect fee</p>
        </div>

        <div className={`${styles.quickItem} ${styles.yellow}`}>
          <CalendarCheck size={20} />
          <p>Attendance</p>
        </div>

        <div className={`${styles.quickItem} ${styles.red}`}>
          <Send size={20} />
          <p>Send notice</p>
        </div>
      </div>
    </div>
  );
}