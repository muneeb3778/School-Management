import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  Users,
  Wallet,
  CreditCard,
  BarChart3,
  MessageSquare,
  Settings,
  X,
} from "lucide-react";

export default function Sidebar({ isOpen = false, onClose = () => {} }) {
  const [collapsed, setCollapsed] = useState(false);
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

  // Mobile drawer open hone par body scroll lock
  useEffect(() => {
    if (!isMobile) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, isOpen]);

  const navClass = ({ isActive }) =>
    `${styles.navItem} ${isActive ? styles.active : ""}`;

  const handleNavClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && (
        <button
          type="button"
          className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
          onClick={onClose}
          aria-label="Close navigation"
        />
      )}

      <aside
        className={`${styles.sidebar} ${
          collapsed && !isMobile ? styles.collapsed : ""
        } ${isOpen ? styles.open : ""}`}
      >
        <div className={styles.top}>
          {/* LOGO */}
          <div className={styles.logoArea}>
            <div>
              <h2>{collapsed && !isMobile ? "SA" : "SchoolAdmin"}</h2>
              {(!collapsed || isMobile) && <p>St. Xavier&apos;s School</p>}
            </div>

            {isMobile && (
              <button
                type="button"
                className={styles.mobileCloseBtn}
                onClick={onClose}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* MAIN */}
          <div className={styles.navSection}>
            {(!collapsed || isMobile) && (
              <p className={styles.sectionTitle}>MAIN</p>
            )}

            <NavLink to="/" className={navClass} onClick={handleNavClick}>
              <LayoutDashboard size={18} />
              {(!collapsed || isMobile) && <span>Dashboard</span>}
            </NavLink>

            <NavLink
              to="/students"
              className={navClass}
              onClick={handleNavClick}
            >
              <GraduationCap size={18} />
              {(!collapsed || isMobile) && <span>Students</span>}
            </NavLink>

            <NavLink
              to="/academics"
              className={navClass}
              onClick={handleNavClick}
            >
              <BookOpen size={18} />
              {(!collapsed || isMobile) && <span>Academics</span>}
            </NavLink>

            <NavLink to="/staff" className={navClass} onClick={handleNavClick}>
              <Users size={18} />
              {(!collapsed || isMobile) && <span>Staff</span>}
            </NavLink>
          </div>

          {/* FINANCE */}
          <div className={styles.navSection}>
            {(!collapsed || isMobile) && (
              <p className={styles.sectionTitle}>FINANCE</p>
            )}

            <NavLink to="/fees" className={navClass} onClick={handleNavClick}>
              <Wallet size={18} />
              {(!collapsed || isMobile) && <span>Fee management</span>}
            </NavLink>

            <NavLink
              to="/payments"
              className={navClass}
              onClick={handleNavClick}
            >
              <CreditCard size={18} />
              {(!collapsed || isMobile) && <span>Payments</span>}
            </NavLink>
          </div>

          {/* OTHER */}
          <div className={styles.navSection}>
            {(!collapsed || isMobile) && (
              <p className={styles.sectionTitle}>OTHER</p>
            )}

            <NavLink
              to="/reports"
              className={navClass}
              onClick={handleNavClick}
            >
              <BarChart3 size={18} />
              {(!collapsed || isMobile) && <span>Reports</span>}
            </NavLink>

            <NavLink
              to="/communication"
              className={navClass}
              onClick={handleNavClick}
            >
              <MessageSquare size={18} />
              {(!collapsed || isMobile) && <span>Communication</span>}
            </NavLink>

            <NavLink
              to="/settings"
              className={navClass}
              onClick={handleNavClick}
            >
              <Settings size={18} />
              {(!collapsed || isMobile) && <span>Settings</span>}
            </NavLink>
          </div>
        </div>

        {/* USER PROFILE */}
        <div className={styles.userBox}>
          <div className={styles.avatar}>AP</div>

          {(!collapsed || isMobile) && (
            <div>
              <p className={styles.userName}>Anita Patel</p>
              <span className={styles.userRole}> Admin</span>
            </div>
          )}
        </div>

        {/* COLLAPSE BUTTON - Desktop only */}
        {!isMobile && (
          <button
            type="button"
            className={styles.collapseBtn}
            onClick={() => setCollapsed((v) => !v)}
            aria-label="Toggle sidebar"
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        )}
      </aside>
    </>
  );
}