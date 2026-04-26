import "../styles/UpcomingEvents.css";

const data = [
  { date: "26 APR", title: "PTM — Class 10 & 11", sub: "Parent-teacher meeting" },
  { date: "5 MAY", title: "Term 2 exams begin", sub: "All classes, 9:00 AM" },
  { date: "12 MAY", title: "Annual sports day", sub: "School ground" },
];

export default function UpcomingEvents() {
  return (
    <div className="card events-card">
      <div className="card-header">
        <h3>Upcoming events</h3>
        <button>View all</button>
      </div>

      {data.map((item, index) => (
        <div className="event-item" key={index}>
          <div className="date-box">
            <span>{item.date.split(" ")[0]}</span>
            <p>{item.date.split(" ")[1]}</p>
          </div>

          <div>
            <p className="title">{item.title}</p>
            <span>{item.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}