import "../styles/RecentActivity.css";

const data = [
  { text: "Fee paid — Rahul Sharma", time: "10 min ago", color: "green" },
  { text: "Admission — Priya Mehta (6A)", time: "1 hr ago", color: "blue" },
  { text: "Leave request — Mr. Suresh", time: "2 hrs ago", color: "orange" },
  { text: "Due reminder — 42 students", time: "9:00 AM today", color: "red" },
  { text: "Timetable updated — Class 10", time: "Yesterday", color: "green" },
];

export default function RecentActivity() {
  return (
    <div className="card activity-card">
      <div className="card-header">
        <h3>Recent activity</h3>
        <button>View all</button>
      </div>

      {data.map((item, index) => (
        <div className="activity-item" key={index}>
          <div className={`icon-box ${item.color}`}>
            <span className="dot"></span>
          </div>
          <div>
            <p>{item.text}</p>
            <span>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}