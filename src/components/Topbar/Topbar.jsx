// src/components/Topbar/Topbar.jsx
import styles from "./Topbar.module.css";
import { useLocation, useMatch, useNavigate } from "react-router-dom";

export default function Topbar({
  type, // optional (auto-detect if not given)
  title,
  subtitle,
  onExport,
  onAddStudent,
  onBack,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const matchStudentProfile = useMatch("/students/:studentId");

  // Auto detect (so you can't accidentally show dashboard topbar on students pages)
  const resolvedType =
    type ??
    (matchStudentProfile
      ? "studentProfile"
      : location.pathname.startsWith("/students")
      ? "students"
      : "dashboard");

  const handleBack = () => {
    if (onBack) return onBack();
    
    // ✅ FIX: Use replace: true for clean navigation
    navigate("/students", { replace: true });
  };

  return (
    <header className={styles.topbar}>
      {/* LEFT */}
      {resolvedType === "dashboard" && (
        <div className={styles.leftCol}>
          <h3 className={styles.title}>Good morning, Admin</h3>
          <p className={styles.subtitle}>Thursday, 23 April 2026</p>
        </div>
      )}

      {resolvedType === "students" && (
        <div className={styles.leftCol}>
          <h3 className={styles.title}>{title ?? "Students"}</h3>
          <p className={styles.subtitle}>{subtitle ?? "1,248 students enrolled"}</p>
        </div>
      )}

      {resolvedType === "studentProfile" && (
        <div className={styles.studentLeft}>
          <button type="button" className={styles.backBtn} onClick={handleBack} aria-label="Back">
            ←
          </button>
          <span className={styles.breadcrumb}>Students</span>
        </div>
      )}

      {/* RIGHT */}
      <div className={styles.right}>
        {resolvedType === "dashboard" && (
          <>
            <span className={styles.badge}>2025–26</span>
            <button type="button" className={styles.notif} aria-label="Notifications">
              🔔
            </button>
          </>
        )}

        {resolvedType === "students" && (
          <>
            <button type="button" className={styles.outlineBtn} onClick={onExport}>
              Export
            </button>
            <button type="button" className={styles.primaryBtn} onClick={onAddStudent}>
              + Add student
            </button>
          </>
        )}

        {resolvedType === "studentProfile" && (
          <>
            <button type="button" className={styles.outlineBtn}>Edit profile</button>
            <button type="button" className={styles.outlineBtn}>Collect fee</button>
            <button type="button" className={styles.primaryBtn}>Send message</button>
          </>
        )}
      </div>
    </header>
  );
}