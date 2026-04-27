// pages/StudentProfile.jsx
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

import StudentHeader from "../components/StudentProfileComponents/StudentHeader";
import StudentTabs from "../components/StudentProfileComponents/StudentTabs";
import PersonalDetails from "../components/StudentProfileComponents/PersonalDetails";
import ParentDetails from "../components/StudentProfileComponents/ParentDetails";
import AttendanceCard from "../components/StudentProfileComponents/AttendanceCard";
import SubjectsCard from "../components/StudentProfileComponents/SubjectsCard";

import "../styles/StudentProfile.css";

export default function StudentProfile() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Topbar type="student" />

        <div className="content">

          {/* HEADER */}
          <StudentHeader />

          {/* TABS */}
          <StudentTabs />

          {/* GRID */}
          <div className="profile-grid">
            <PersonalDetails />
            <ParentDetails />
          </div>

          {/* BOTTOM GRID */}
          <div className="profile-bottom-grid">
            <AttendanceCard />
            <SubjectsCard />
          </div>

        </div>
      </div>
    </div>
  );
}