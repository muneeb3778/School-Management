import "../../styles/DashboardComponentsStyles/Attendance.css";

const data = [
  { class: "Class 10", percent: 96, color: "green" },
  { class: "Class 9", percent: 91, color: "green" },
  { class: "Class 8", percent: 88, color: "orange" },
  { class: "Class 7", percent: 85, color: "orange" },
  { class: "Class 6", percent: 79, color: "red" },
  { class: "Class 5", percent: 93, color: "green" },
];

export default function AttendanceByClass() {
  return (
    <div className="card attendance-card">
      <div className="card-header">
        <h3>Attendance by class</h3>
        <button>Full report</button>
      </div>

      {data.map((item, index) => (
        <div className="attendance-row" key={index}>
          <p>{item.class}</p>

          <div className="bar">
            <div
              className={`fill ${item.color}`}
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>

          <span>{item.percent}%</span>
        </div>
      ))}
    </div>
  );
}