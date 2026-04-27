import "../../styles/DashboardComponentsStyles/feeList.css";

const data = [
  { name: "Arjun Nair", class: "Class 10A", amount: "₹12,500", status: "Paid", initials: "AN" },
  { name: "Sneha Rao", class: "Class 8C", amount: "₹9,000", status: "Paid", initials: "SR" },
  { name: "Karan Joshi", class: "Class 7B", amount: "₹6,500", status: "Due", initials: "KJ" },
  { name: "Meera Iyer", class: "Class 11A", amount: "₹14,000", status: "Due", initials: "MI" },
  { name: "Riya Pillai", class: "Class 9A", amount: "₹11,000", status: "Paid", initials: "RP" },
];

export default function FeeList() {
  return (
    <div className="card fee-card">
      <div className="card-header">
        <h3>Recent fee payments</h3>
        <button>Manage →</button>
      </div>

      {data.map((item, index) => (
        <div className="fee-item" key={index}>
          <div className="left">
            <div className={`avatar ${item.status === "Paid" ? "avatar-paid" : "avatar-due"}`}>
              {item.initials}
              </div>
            <div>
              <p>{item.name}</p>
              <span>{item.class}</span>
            </div>
          </div>

          <div className="right">
            <p>{item.amount}</p>
            <span className={item.status === "Paid" ? "paid" : "due"}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}