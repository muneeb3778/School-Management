import { useMemo, useRef, useState } from "react";
import styles from "./Academics.module.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";

import AcademicsTabs from "./components/AcademicsTabs/AcademicsTabs";
import PeriodTimings from "./components/PeriodTimings/PeriodTimings";
import OptionsCard from "./components/OptionsCard/OptionsCard";

const initialSlots = [
  { id: "p1", type: "period", label: "Period 1", start: "08:00", end: "09:00" },
  { id: "p2", type: "period", label: "Period 2", start: "09:00", end: "10:00" },
  { id: "p3", type: "period", label: "Period 3", start: "10:00", end: "11:00" },
  { id: "p4", type: "period", label: "Period 4", start: "11:00", end: "12:00" },
  { id: "b1", type: "break",  label: "Break",    start: "12:00", end: "12:30" },
  { id: "p5", type: "period", label: "Period 5", start: "12:30", end: "13:30" },
];

export default function Academics() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Timetable");

  const [slots, setSlots] = useState(initialSlots);
  const initialRef = useRef(initialSlots);

  const [options, setOptions] = useState({
    applyAllClasses: false,
    saturdaySchedule: false,
    notifyTeachers: true,
  });

  const crumbs = "Academics › Timetable › Edit slots";
  const subtitle = "Class 10 A · Changes apply to all days";

  const onDiscard = () => {
    setSlots(initialRef.current);
    setOptions({ applyAllClasses: false, saturdaySchedule: false, notifyTeachers: true });
  };

  const onSave = () => {
    initialRef.current = slots;
    alert("Saved (demo).");
  };

  const content = useMemo(() => {
    if (activeTab !== "Timetable") {
      return (
        <div className="card" style={{ padding: 16, marginTop: 14 }}>
          <b>{activeTab}</b> — Coming soon
        </div>
      );
    }

    return (
      <>
        <PeriodTimings slots={slots} setSlots={setSlots} />
        <OptionsCard options={options} setOptions={setOptions} />
      </>
    );
  }, [activeTab, slots, options]);

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className={styles.main}>
        <Topbar
          type="academics"
          crumbs={crumbs}
          title="Manage period times"
          subtitle={subtitle}
          secondaryLabel="Discard"
          onSecondary={onDiscard}
          primaryLabel="Save period times"
          onPrimary={onSave}
          onMenuClick={() => setDrawerOpen(true)}
        />

        <div className={styles.content}>
          <AcademicsTabs active={activeTab} onChange={setActiveTab} />
          {content}
        </div>
      </div>
    </div>
  );
}