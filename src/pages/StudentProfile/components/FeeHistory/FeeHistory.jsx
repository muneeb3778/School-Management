import styles from "./FeeHistory.module.css";

export default function FeeHistory({ student }) {
  const feeHistory = student.feeHistory || [];

  return (
    <div className="card">
      <h3>Fee history</h3>

      <div className={styles.list}>
        {feeHistory.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.left}>
              <p className={styles.term}>{item.term}</p>
              <span className={styles.date}>{item.date}</span>
            </div>

            <div className={styles.right}>
              <span className={styles.amount}>{item.amount}</span>
              <span
                className={`${styles.statusBadge} ${
                  item.status === "Paid"
                    ? styles.paid
                    : item.status === "Due"
                      ? styles.due
                      : styles.new
                }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}

        {feeHistory.length === 0 && (
          <p className={styles.empty}>No fee records found.</p>
        )}
      </div>
    </div>
  );
}