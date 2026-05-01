import styles from "./StudentProfile.module.css";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { studentsData } from "../../data/studentsData";

import StudentHeader from "./components/StudentHeader/StudentHeader";
import StudentTabs from "./components/StudentTabs/StudentTabs";
import PersonalDetails from "./components/PersonalDetails/PersonalDetails";
import ParentDetails from "./components/ParentDetails/ParentDetails";
import AttendanceCard from "./components/AttendanceCard/AttendanceCard";
import SubjectsCard from "./components/SubjectsCard/SubjectsCard";

export default function StudentProfile() {
  const { studentId } = useParams();

  const student = useMemo(
    () => studentsData.find((s) => s.id === studentId),
    [studentId]
  );

  if (!student) {
    return (
      <div className={styles.studentProfileLayout}>
        <Sidebar />
        <div className={styles.main}>
          <Topbar type="studentProfile" />
          <div className={styles.content}>
            <div className="card" style={{ padding: 16 }}>
              <h3>Student not found!</h3>
              <p>ID: {studentId}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.studentProfileLayout}>
      <Sidebar />
      <div className={styles.main}>
        <Topbar type="studentProfile" />

        <div className={styles.content}>
          <StudentHeader student={student} />

          <StudentTabs />

          <div className={styles.profileGrid}>
            <PersonalDetails student={student} />
            <ParentDetails student={student} />
          </div>

          <div className={styles.profileBottomGrid}>
            <AttendanceCard student={student} />
            <SubjectsCard student={student} />
          </div>
        </div>
      </div>
    </div>
  );
}