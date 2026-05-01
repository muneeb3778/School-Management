// src/components/Sidebar/Sidebar.jsx
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
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setCollapsed(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navClass = ({ isActive }) =>
    `${styles.navItem} ${isActive ? styles.active : ""}`;

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.top}>
        {/* LOGO */}
        <div className={styles.logoArea}>
          <h2>{collapsed ? "SA" : "SchoolAdmin"}</h2>
          {!collapsed && <p>St. Xavier&apos;s School</p>}
        </div>

        {/* MAIN */}
        <div className={styles.navSection}>
          {!collapsed && <p className={styles.sectionTitle}>MAIN</p>}

          <NavLink to="/" className={navClass}>
            <LayoutDashboard size={18} />
            {!collapsed && <span>Dashboard</span>}
          </NavLink>

          <NavLink to="/students" className={navClass}>
            <GraduationCap size={18} />
            {!collapsed && <span>Students</span>}
          </NavLink>

          <NavLink to="/Academics" className={navClass}>
            <BookOpen size={18} />
            {!collapsed && <span>Academics</span>}
          </NavLink>

          <NavLink to="/staff" className={navClass}>
            <Users size={18} />
            {!collapsed && <span>Staff</span>}
          </NavLink>
        </div>

        {/* FINANCE */}
        <div className={styles.navSection}>
          {!collapsed && <p className={styles.sectionTitle}>FINANCE</p>}

          <NavLink to="/fees" className={navClass}>
            <Wallet size={18} />
            {!collapsed && <span>Fee management</span>}
          </NavLink>

          <NavLink to="/payments" className={navClass}>
            <CreditCard size={18} />
            {!collapsed && <span>Payments</span>}
          </NavLink>
        </div>

        {/* OTHER */}
        <div className={styles.navSection}>
          {!collapsed && <p className={styles.sectionTitle}>OTHER</p>}

          <NavLink to="/reports" className={navClass}>
            <BarChart3 size={18} />
            {!collapsed && <span>Reports</span>}
          </NavLink>

          <NavLink to="/communication" className={navClass}>
            <MessageSquare size={18} />
            {!collapsed && <span>Communication</span>}
          </NavLink>

          <NavLink to="/settings" className={navClass}>
            <Settings size={18} />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </div>
      </div>

      {/* USER PROFILE */}
      <div className={styles.userBox}>
        <div className={styles.avatar}>AP</div>
        {!collapsed && (
          <div>
            <p className={styles.userName}>Anita Patel</p>
            <span className={styles.userRole}>Super Admin</span>
          </div>
        )}
      </div>

      {/* COLLAPSE BUTTON */}
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
  );
}