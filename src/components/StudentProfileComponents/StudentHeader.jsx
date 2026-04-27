// StudentHeader.jsx

import "../../styles/StudentsProfileComponentsStyles/StudentHeader.css";

export default function StudentHeader() {
  return (
    <div className="card student-header">
      <div className="left">
        <div className="avatar big">AN</div>

        <div>
          <h2>Arjun Nair</h2>

          <div className="tags">
            <span>#STU-1041</span>
            <span>Class 10-A</span>
            <span className="active">Active</span>
            <span>Roll No. 14</span>
          </div>
        </div>
      </div>

      <div className="right">
        <div>
          <h3>94%</h3>
          <p>Attendance</p>
        </div>

        <div>
          <h3>A</h3>
          <p>Avg grade</p>
        </div>

        <div>
          <h3 className="paid">Paid</h3>
          <p>Fee status</p>
        </div>
      </div>
    </div>
  );
}