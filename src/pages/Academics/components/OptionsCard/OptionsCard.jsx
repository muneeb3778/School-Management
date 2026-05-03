import styles from "./OptionsCard.module.css";

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      className={`${styles.toggle} ${checked ? styles.on : ""}`}
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
    >
      <span className={styles.knob} />
    </button>
  );
}

export default function OptionsCard({ options, setOptions }) {
  return (
    <div className={`card ${styles.card}`}>
      <h3 className={styles.heading}>Options</h3>

      <div className={styles.item}>
        <div>
          <p className={styles.title}>Apply to all classes</p>
          <span className={styles.sub}>Same timings across all classes in school</span>
        </div>
        <Toggle
          checked={options.applyAllClasses}
          onChange={(v) => setOptions((p) => ({ ...p, applyAllClasses: v }))}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.item}>
        <div>
          <p className={styles.title}>Saturday schedule</p>
          <span className={styles.sub}>Use different period count on Saturdays</span>
        </div>
        <Toggle
          checked={options.saturdaySchedule}
          onChange={(v) => setOptions((p) => ({ ...p, saturdaySchedule: v }))}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.item}>
        <div>
          <p className={styles.title}>Notify teachers on change</p>
          <span className={styles.sub}>Send SMS/email when periods are updated</span>
        </div>
        <Toggle
          checked={options.notifyTeachers}
          onChange={(v) => setOptions((p) => ({ ...p, notifyTeachers: v }))}
        />
      </div>
    </div>
  );
}