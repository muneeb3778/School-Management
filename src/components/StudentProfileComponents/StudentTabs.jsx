import "../../styles/StudentsProfileComponentsStyles/StudentTabs.css";

export default function StudentTabs() {
  return (
    <div className="tabs">
      <button className="active">Overview</button>
      <button>Attendance</button>
      <button>Academics</button>
      <button>Fee history</button>
      <button>Documents</button>
    </div>
  );
}