import styles from "./NotesAndRemarks.module.css";

export default function NotesAndRemarks({ student }) {
  const notes = student.notesAndRemarks || [];

  return (
    <div className="card">
      <h3>Notes & remarks</h3>

      <div className={styles.list}>
        {notes.map((note, index) => (
          <div key={index} className={styles.item}>
            <div
              className={styles.icon}
              style={{ backgroundColor: note.iconColor }}
            />

            <div className={styles.content}>
              <p className={styles.text}>{note.text}</p>
              <div className={styles.meta}>
                <span className={styles.date}>{note.date}</span>
                <span className={styles.dot}>•</span>
                <span className={styles.author}>{note.author}</span>
              </div>
            </div>
          </div>
        ))}

        {notes.length === 0 && (
          <p className={styles.empty}>No notes or remarks available.</p>
        )}
      </div>
    </div>
  );
}