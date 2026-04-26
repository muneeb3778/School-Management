import "../styles/Topbar.css";

export default function Topbar() {
  return (
    <div className="topbar">
      
      <div>
        <h3>Good morning, Admin</h3>
        <p>Thursday, 23 April 2026</p>
      </div>

      <div className="topbar-right">
        <span className="badge">2025–26</span>
        <button className="notif">🔔</button>
      </div>

    </div>
  );
}