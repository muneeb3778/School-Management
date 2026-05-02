// src/pages/Dashboard/Dashboard.jsx
import styles from "./Dashboard.module.css";
import { useState } from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import StatsCard from "./components/StatsCard/StatsCard";
import RecentActivity from "./components/RecentActivity/RecentActivity";
import FeeList from "./components/FeeList/FeeList";
import AttendanceByClass from "./components/AttendanceByClass/AttendanceByClass";
import QuickActions from "./components/QuickActions/QuickActions";
import UpcomingEvents from "./components/UpcomingEvents/UpcomingEvents";

export default function Dashboard() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={styles.dashboardLayout}>
      <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className={styles.main}>
        <Topbar
          type="dashboard"
          onMenuClick={() => setDrawerOpen(true)}
        />

        <div className={styles.content}>
          <div className={styles.statGrid}>
            <StatsCard title="Total students" value="1248" color="purple" sub="+34 this term" />
            <StatsCard title="Today's attendance" value="91%" color="green" sub="87 absent" />
            <StatsCard title="Fees collected" value="₹8.4L" color="yellow" sub="This month" />
            <StatsCard title="Dues pending" value="₹1.2L" color="red" sub="42 students" />
          </div>

          <div className={styles.mainGrid}>
            <FeeList />
            <RecentActivity />
          </div>

          <div className={styles.bottomGrid}>
            <AttendanceByClass />
            <QuickActions />
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  );
}