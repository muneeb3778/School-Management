import "../styles/Topbar.css";

export default function Topbar({ type = "dashboard" }) {
  return (
    <div className="topbar">

      {/* LEFT SIDE */}
      {type === "dashboard" ? (
        <div>
          <h3>Good morning, Admin</h3>
          <p>Thursday, 23 April 2026</p>
        </div>
      ) : (
        <div className="topbar-student-left">
          <button className="back-btn">←</button>
          <span>Students</span>
        </div>
      )}

      {/* RIGHT SIDE */}
      <div className="topbar-right">

        {type === "student" && (
          <>
            <button className="outline-btn">Edit profile</button>
            <button className="outline-btn">Collect fee</button>
            <button className="primary-btn">Send message</button>
          </>
        )}

        {type === "dashboard" && (
          <>
            <span className="badge">2025–26</span>
            <button className="notif">🔔</button>
          </>
        )}

      </div>
    </div>
  );
}