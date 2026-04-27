import "../../styles/StudentsProfileComponentsStyles/AttendanceCard.css";

const data = [
    { week: "Week 1", percent: 100 },
    { week: "Week 2", percent: 80 },
    { week: "Week 3", percent: 100 },
    { week: "Week 4", percent: 100 },
];

export default function AttendanceCard() {

    const getColor = (value) => {
        if (value >= 90) return "green";
        if (value >= 80) return "orange";
        return "red";
    };

    return (
        <div className="card attendance-card">
            <h3>Attendance — this month</h3>

            {data.map((item, index) => (
                <div className="progress-row" key={index}>
                    <p>{item.week}</p>

                    <div className="progress-bar">
                        <span
                            className={`progress-fill ${getColor(item.percent)}`}
                            style={{ width: `${item.percent}%` }}
                        ></span>
                    </div>

                    <span className="percent">{item.percent}%</span>
                </div>
            ))}

        </div>
    );
}