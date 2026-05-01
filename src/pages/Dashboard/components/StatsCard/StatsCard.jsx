import styles from "./StatsCard.module.css";
import { Users, BarChart3, Wallet, AlertCircle } from "lucide-react";

const iconMap = {
  "Total students": <Users size={20} />,
  "Today's attendance": <BarChart3 size={20} />,
  "Fees collected": <Wallet size={20} />,
  "Dues pending": <AlertCircle size={20} />,
};

export default function StatsCard({ title, value, sub, color }) {
  return (
    <div className={`card ${styles.statCard} ${styles[color]}`}>
      <div className={styles.iconBox}>{iconMap[title]}</div>

      <div className={styles.statBody}>
        <p className={styles.title}>{title}</p>
        <h2 className={styles.value}>{value}</h2>
        <span className={styles.sub}>{sub}</span>
      </div>
    </div>
  );
}