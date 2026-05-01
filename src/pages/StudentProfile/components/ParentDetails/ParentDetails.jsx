import styles from "./ParentDetails.module.css";

function getParentInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ParentDetails({ student }) {
  const parentInitials = getParentInitials(student.parentName);

  return (
    <div className="card">
      <h3>Parent / guardian</h3>

      <div className={styles.parentTop}>
        <div className={styles.avatar}>{parentInitials}</div>
        <div>
          <h4 className={styles.parentName}>{student.parentName}</h4>
          <p className={styles.parentRole}>{student.parentRelation}</p>
        </div>
      </div>

      <div className={styles.detailsGrid}>
        <div>
          <p>Mobile</p>
          <h4>{student.parentMobile}</h4>
        </div>

        <div>
          <p>Email</p>
          <h4>{student.parentEmail}</h4>
        </div>

        <div>
          <p>Occupation</p>
          <h4>{student.parentOccupation}</h4>
        </div>

        <div>
          <p>Login access</p>
          <h4 className={styles.active}>Active</h4>
        </div>
      </div>
    </div>
  );
}