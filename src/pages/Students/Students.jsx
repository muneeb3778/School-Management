import styles from "./Students.module.css";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { studentsData } from "../../data/studentsData";

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Students() {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [chip, setChip] = useState("All"); // All | Active | Fee due | New

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return studentsData.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.id.toLowerCase().includes(q) ||
        s.class.toLowerCase().includes(q);

      const matchesChip =
        chip === "All"
          ? true
          : chip === "Fee due"
            ? s.fee === "Due"
            : chip === "New"
              ? s.fee === "New"
              : chip === "Active"
                ? s.fee !== "New"
                : true;

      return matchesQuery && matchesChip;
    });
  }, [query, chip]);


  // ✅ FIX HERE: Navigate with replace: true to avoid history buildup
  const goToProfile = (studentId) => {
    navigate(`/students/${studentId}`);
  };


  return (
    <div className={styles.studentsLayout}>
      <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className={styles.main}>
        <Topbar
          type="students"
          title="Students"
          subtitle={`${studentsData.length} students enrolled`}
          onMenuClick={() => setDrawerOpen(true)}
        />

        <div className={styles.content}>
          {/* Toolbar */}
          <div className={`card ${styles.toolbar}`}>
            <div className={styles.toolbarRow}>
              <div className={styles.searchWrap}>
                <input
                  className={styles.search}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by name, ID, class..."
                />
              </div>

              <div className={styles.filters}>
                <button type="button" className={styles.filterBtn}>
                  All classes <span className={styles.caret}>▾</span>
                </button>
                <button type="button" className={styles.filterBtn}>
                  All sections <span className={styles.caret}>▾</span>
                </button>
              </div>

              <div className={styles.chips}>
                {["All", "Active", "Fee due", "New"].map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`${styles.chip} ${chip === c ? styles.chipActive : ""}`}
                    onClick={() => setChip(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            <div className={`card ${styles.statCard}`}>
              <span className={`${styles.dot} ${styles.dotPurple}`} />
              <div>
                <p className={styles.statValue}>{studentsData.length}</p>
                <span className={styles.statLabel}>Total students</span>
              </div>
            </div>

            <div className={`card ${styles.statCard}`}>
              <span className={`${styles.dot} ${styles.dotGreen}`} />
              <div>
                <p className={styles.statValue}>
                  {studentsData.filter(s => s.fee !== "New").length}
                </p>
                <span className={styles.statLabel}>Active</span>
              </div>
            </div>

            <div className={`card ${styles.statCard}`}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <div>
                <p className={styles.statValue}>
                  {studentsData.filter(s => s.fee === "Due").length}
                </p>
                <span className={styles.statLabel}>Fee due</span>
              </div>
            </div>

            <div className={`card ${styles.statCard}`}>
              <span className={`${styles.dot} ${styles.dotBlue}`} />
              <div>
                <p className={styles.statValue}>
                  {studentsData.filter(s => s.fee === "New").length}
                </p>
                <span className={styles.statLabel}>New this term</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className={`card ${styles.tableCard}`}>
            <div className={styles.tableHead}>
              <span>Student</span>
              <span>Class</span>
              <span>Parent contact</span>
              <span>Fee status</span>
              <span className={styles.actionsCol}>Actions</span>
            </div>

            {filtered.map((s) => (
              <div
                key={s.id}
                className={styles.tableRow}
                role="button"
                tabIndex={0}
                onClick={() => goToProfile(s.id)}
                onKeyDown={(e) => e.key === "Enter" && goToProfile(s.id)}
              >
                <div className={styles.studentCell}>
                  <div className={styles.avatar}>{initials(s.name)}</div>
                  <div className={styles.studentMeta}>
                    <p className={styles.studentName}>{s.name}</p>
                    <span className={styles.studentId}>#{s.id}</span>
                  </div>
                </div>

                <span className={styles.cellText}>{s.class}</span>
                <span className={styles.cellText}>{s.phone}</span>

                <div>
                  <span
                    className={`${styles.badge} ${s.fee === "Paid"
                      ? styles.badgePaid
                      : s.fee === "Due"
                        ? styles.badgeDue
                        : styles.badgeNew
                      }`}
                  >
                    {s.fee}
                  </span>
                </div>

                <div className={styles.actionsCol}>
                  <button
                    type="button"
                    className={styles.moreBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    •••
                  </button>
                </div>
              </div>
            ))}

            {/* Footer pagination */}
            <div className={styles.tableFooter}>
              <span className={styles.footerText}>
                Showing 1–{filtered.length} of {studentsData.length} students
              </span>

              <div className={styles.pagination}>
                <button type="button" className={styles.pageBtn}>{"<"}</button>
                <button type="button" className={`${styles.pageBtn} ${styles.pageActive}`}>1</button>
                <button type="button" className={styles.pageBtn}>2</button>
                <button type="button" className={styles.pageBtn}>3</button>
                <span className={styles.dots}>…</span>
                <button type="button" className={styles.pageBtn}>178</button>
                <button type="button" className={styles.pageBtn}>{">"}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}