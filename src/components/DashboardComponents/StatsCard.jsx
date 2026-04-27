import "../../styles/DashboardComponentsStyles/StatsCard.css";
import {
  Users,
  BarChart3,
  Wallet,
  AlertCircle
} from "lucide-react";

const iconMap = {
  "Total students": <Users size={20} />,
  "Today's attendance": <BarChart3 size={20} />,
  "Fees collected": <Wallet size={20} />,
  "Dues pending": <AlertCircle size={20} />,
};


export default function StatsCard({ title, value, sub, color, icon }) {
  return (
    <div className={`card stat-card ${color}`}>
      <div className="icon-box">
        {iconMap[title]}
      </div>

      <div className="stat-body">
        <p className="title">{title}</p>
        <h2>{value}</h2>
        <span>{sub}</span>
      </div>
    </div>
  );
}