// components/Sidebar.jsx
import "../styles/sidebar.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    LayoutDashboard,
    GraduationCap,
    BookOpen,
    Users,
    Wallet,
    CreditCard,
    BarChart3,
    MessageSquare,
    Settings
} from "lucide-react";


export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (mobile) setCollapsed(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

            <div className="top">
                {/* LOGO */}
                <div className="logo-area">
                    <h2>{collapsed ? "SA" : "SchoolAdmin"}</h2>
                    {!collapsed && <p>St. Xavier's School</p>}
                </div>

                {/* MAIN */}
                <div className="nav-section">
                    {!collapsed && <p className="section-title">MAIN</p>}

                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                        <LayoutDashboard size={18} />
                        {!collapsed && <span>Dashboard</span>}
                    </NavLink>

                    <NavLink to="/student" className="nav-item">
                        <GraduationCap size={18} />
                        {!collapsed && <span>Students</span>}
                    </NavLink>

                    <NavLink to="/Academics" className="nav-item">
                        <BookOpen size={18} />
                        {!collapsed && <span>Academics</span>}
                    </NavLink>

                    <NavLink to="/staff" className="nav-item">
                        <Users size={18} />
                        {!collapsed && <span>Staff</span>}
                    </NavLink>
                </div>

                {/* FINANCE */}
                <div className="nav-section">
                    {!collapsed && <p className="section-title">FINANCE</p>}
                    <NavLink to="/fees" className="nav-item">
                        <Wallet size={18} />
                        {!collapsed && <span>Fee management</span>}
                    </NavLink>

                    <NavLink to="/payments" className="nav-item">
                        <CreditCard size={18} />
                        {!collapsed && <span>Payments</span>}
                    </NavLink>
                </div>

                {/* OTHER */}
                <div className="nav-section">
                    {!collapsed && <p className="section-title">OTHER</p>}
                    <NavLink to="/reports" className="nav-item">
                        <BarChart3 size={18} />
                        {!collapsed && <span>Reports</span>}
                    </NavLink>

                    <NavLink to="/communication" className="nav-item">
                        <MessageSquare size={18} />
                        {!collapsed && <span>Communication</span>}
                    </NavLink>

                    <NavLink to="/settings" className="nav-item">
                        <Settings size={18} />
                        {!collapsed && <span>Settings</span>}
                    </NavLink>
                </div>
            </div>

            {/* USER PROFILE */}
            
            <div className="user-box">
                <div className="avatar">AP</div>
                {!collapsed && (
                    <div>
                        <p>Anita Patel</p>
                        <span>Super Admin</span>
                    </div>
                )}
            </div>

            {/* COLLAPSE BUTTON */}
            {!isMobile && (
                <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? "➡️" : "⬅️"}
                </button>
            )}


        </div>
        
    );
}