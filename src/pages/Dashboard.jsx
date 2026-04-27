import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatsCard from "../components/DashboardComponents/StatsCard";
import RecentActivity from "../components/DashboardComponents/RecentActivity";
import FeeList from "../components/DashboardComponents/FeeList";
import AttendanceByClass from "../components/DashboardComponents/AttendanceByClass";
import QuickActions from "../components/DashboardComponents/QuickActions";
import UpcomingEvents from "../components/DashboardComponents/UpcomingEvents";

import "../styles/dashboard.css";

export default function Dashboard() {
    return (
        <div className="layout">
            <Sidebar />

            <div className="main">
                <Topbar type="dashboard" />

                <div className="content">

                    {/* TOP STATS */}
                    <div className="stat-grid">
                        <StatsCard title="Total students" value="1248" color="purple" sub="+34 this term" />
                        <StatsCard title="Today's attendance" value="91%" color="green" sub="87 absent" />
                        <StatsCard title="Fees collected" value="₹8.4L" color="yellow" sub="This month" />
                        <StatsCard title="Dues pending" value="₹1.2L" color="red" sub="42 students" />
                    </div>




                    {/* MAIN GRID */}
                    <div className="main-grid">
                        <FeeList />
                        <RecentActivity />
                    </div>

                    {/* BOTTOM */}
                    <div className="bottom-grid">
                        <AttendanceByClass />
                        <QuickActions />
                        <UpcomingEvents />
                    </div>

                </div>
            </div>
        </div>
    );
}