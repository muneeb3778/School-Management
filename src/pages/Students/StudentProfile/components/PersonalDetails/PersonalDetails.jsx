import styles from "./PersonalDetails.module.css";

export default function PersonalDetails({ student }) {
  return (
    <div className="card">
      <h3>Personal details</h3>

      <div className={styles.detailsGrid}>
        <div>
          <p>Date of birth</p>
          <h4>{student.dob}</h4>
        </div>

        <div>
          <p>Gender</p>
          <h4>{student.gender}</h4>
        </div>

        <div>
          <p>Blood group</p>
          <h4>{student.bloodGroup}</h4>
        </div>

        <div>
          <p>Admission date</p>
          <h4>{student.admissionDate}</h4>
        </div>

        <div>
          <p>Category</p>
          <h4>{student.category}</h4>
        </div>

        <div>
          <p>Transport</p>
          <h4>{student.transport}</h4>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.addressBlock}>
        <p>Address</p>
        <h4>{student.address.split("\n")[0]}</h4>
        <span>{student.address.split("\n")[1]}</span>
      </div>
    </div>
  );
}