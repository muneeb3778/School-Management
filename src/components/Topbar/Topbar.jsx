import styles from "./Topbar.module.css";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Topbar({
  type,
  title,
  subtitle,
  onExport,
  onAddStudent,
  onBack,
  onMenuClick,

  // ✅ new for academics
  crumbs,
  secondaryLabel,
  onSecondary,
  primaryLabel,
  onPrimary,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (mobile) {
        setCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const matchStudentProfile = useMatch("/students/:studentId");

  const resolvedType =
    type ??
    (matchStudentProfile
      ? "studentProfile"
      : location.pathname.startsWith("/students")
        ? "students"
        : location.pathname.startsWith("/academics")
          ? "academics"
          : "dashboard");


  const handleBack = () => {
    if (onBack) return onBack();

    navigate("/students", { replace: true });
  };

  return (
    <header className={`${styles.topbar} ${styles[resolvedType] || ""}`}>
      {/* LEFT AREA */}
      <div className={styles.leftArea}>
        {/* Mobile hamburger */}
        <button
          type="button"
          className={styles.menuBtn}
          onClick={onMenuClick}
          aria-label="Open navigation"
        >
          <Menu size={21} />
        </button>

        {resolvedType === "dashboard" && (
          <div className={styles.leftCol}>
            <h3 className={styles.title}>Good morning, Admin</h3>
            <p className={styles.subtitle}>Thursday, 23 April 2026</p>
          </div>
        )}

        {resolvedType === "students" && (
          <div className={styles.leftCol}>
            <h3 className={styles.title}>{title ?? "Students"}</h3>
            <p className={styles.subtitle}>
              {subtitle ?? "1,248 students enrolled"}
            </p>
          </div>
        )}

        {resolvedType === "studentProfile" && (
          <div className={styles.studentLeft}>

            {!isMobile &&
              <button
                type="button"
                className={styles.backBtn}
                onClick={handleBack}
                aria-label="Back"
              >
                ←
              </button>
            }
            <span className={styles.breadcrumb}>Students</span>
          </div>
        )}


        {resolvedType === "academics" && (
          <div className={styles.leftCol}>
            {crumbs && <p className={styles.crumbs}>{crumbs}</p>}
            <h3 className={styles.title}>{title ?? "Academics"}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
        )}



      </div>

      {/* RIGHT AREA */}
      <div className={styles.right}>
        {resolvedType === "dashboard" && (
          <>
            <span className={styles.badge}>2025–26</span>
            <button
              type="button"
              className={styles.notif}
              aria-label="Notifications"
            >
              🔔
            </button>
          </>
        )}

        {resolvedType === "students" && (
          <>
            <button type="button" className={styles.outlineBtn} onClick={onExport}>
              Export
            </button>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={onAddStudent}
            >
              + Add student
            </button>
          </>
        )}

        {resolvedType === "studentProfile" && (
          <>
            <button type="button" className={styles.outlineBtn}>
              Edit profile
            </button>
            <button type="button" className={styles.outlineBtn}>
              Collect fee
            </button>
            <button type="button" className={styles.primaryBtn}>
              Send message
            </button>
          </>
        )}


        {resolvedType === "academics" && (
          <>
            {secondaryLabel && (
              <button type="button" className={styles.outlineBtn} onClick={onSecondary}>
                {secondaryLabel}
              </button>
            )}
            {primaryLabel && (
              <button type="button" className={styles.primaryBtn} onClick={onPrimary}>
                {primaryLabel}
              </button>
            )}
          </>
        )}

      </div>
    </header>
  );
}