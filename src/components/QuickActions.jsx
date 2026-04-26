import "../styles/QuickActions.css";

import { UserPlus, Wallet, CalendarCheck, Send } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="card quick-card">
      <h3>Quick actions</h3>

      <div className="quick-grid">
        <div className="quick-item purple">
          <UserPlus size={20} />
          <p>Add student</p>
        </div>

        <div className="quick-item green">
          <Wallet size={20} />
          <p>Collect fee</p>
        </div>

        <div className="quick-item yellow">
          <CalendarCheck size={20} />
          <p>Attendance</p>
        </div>

        <div className="quick-item red">
          <Send size={20} />
          <p>Send notice</p>
        </div>
      </div>
    </div>
  );
}