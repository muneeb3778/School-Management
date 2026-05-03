import styles from "./StudentTabs.module.css";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "attendance", label: "Attendance" },
  { id: "academics", label: "Academics" },
  { id: "feeHistory", label: "Fee history" },
  { id: "documents", label: "Documents" }
];

export default function StudentTabs({ activeTab = "overview", onTabChange }) {
  const handleClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`${styles.tabBtn} ${
            activeTab === tab.id ? styles.active : ""
          }`}
          onClick={() => handleClick(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}