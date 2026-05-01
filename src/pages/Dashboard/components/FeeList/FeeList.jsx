import styles from "./FeeList.module.css";

const data = [
  { name: "Arjun Nair", class: "Class 10A", amount: "₹12,500", status: "Paid", initials: "AN" },
  { name: "Sneha Rao", class: "Class 8C", amount: "₹9,000", status: "Paid", initials: "SR" },
  { name: "Karan Joshi", class: "Class 7B", amount: "₹6,500", status: "Due", initials: "KJ" },
  { name: "Meera Iyer", class: "Class 11A", amount: "₹14,000", status: "Due", initials: "MI" },
  { name: "Riya Pillai", class: "Class 9A", amount: "₹11,000", status: "Paid", initials: "RP" },
];

export default function FeeList() {
  return (
    <div className={`card ${styles.feeCard}`}>
      <div className={styles.cardHeader}>
        <h3>Recent fee payments</h3>
        <button type="button" className={styles.headerBtn}>Manage →</button>
      </div>

      {data.map((item, index) => {
        const isPaid = item.status === "Paid";

        return (
          <div className={styles.feeItem} key={index}>
            <div className={styles.left}>
              <div className={`${styles.avatar} ${isPaid ? styles.avatarPaid : styles.avatarDue}`}>
                {item.initials}
              </div>

              <div>
                <p className={styles.name}>{item.name}</p>
                <span className={styles.studentClass}>{item.class}</span>
              </div>
            </div>

            <div className={styles.right}>
              <p className={styles.amount}>{item.amount}</p>
              <span className={isPaid ? styles.paid : styles.due}>{item.status}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}