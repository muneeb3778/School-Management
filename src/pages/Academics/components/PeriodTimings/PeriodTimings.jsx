import styles from "./PeriodTimings.module.css";
import { Clock, Plus } from "lucide-react";

function toMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}
function fmtDuration(start, end) {
  let diff = toMinutes(end) - toMinutes(start);
  if (diff < 0) diff += 24 * 60;
  const h = Math.floor(diff / 60);
  const m = diff % 60;
  if (h && !m) return `${h}h`;
  if (!h && m) return `${m}m`;
  return `${h}h ${m}m`;
}
function addMinutes(time, mins) {
  const total = (toMinutes(time) + mins) % (24 * 60);
  const hh = String(Math.floor(total / 60)).padStart(2, "0");
  const mm = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}



export default function PeriodTimings({ slots, setSlots }) {

  const onChangeTime = (id, key, value) => {
    setSlots((prev) => prev.map((s) => (s.id === id ? { ...s, [key]: value } : s)));
  };

  const onRemove = (id) => setSlots((prev) => prev.filter((s) => s.id !== id));

  const onAddPeriod = () => {
    const last = slots[slots.length - 1];
    const start = last?.end ?? "08:00";
    const end = addMinutes(start, 60);
    const num = slots.filter((s) => s.type === "period").length + 1;

    setSlots((prev) => [
      ...prev,
      { id: `p${Date.now()}`, type: "period", label: `Period ${num}`, start, end },
    ]);
  };

  const onAddBreak = () => {
    const last = slots[slots.length - 1];
    const start = last?.end ?? "12:00";
    const end = addMinutes(start, 30);

    setSlots((prev) => [
      ...prev,
      { id: `b${Date.now()}`, type: "break", label: "Break", start, end },
    ]);
  };

  return (
    <div className={`card ${styles.card}`}>
      <div className={styles.cardHead}>
        <h3 className={styles.heading}>Period timings</h3>

        <div className={styles.headActions}>
          <button type="button" className={styles.smallBtn} onClick={onAddPeriod}>
            <Plus size={16} /> Add period
          </button>
          <button type="button" className={styles.smallBtn} onClick={onAddBreak}>
            <Plus size={16} /> Add break
          </button>
        </div>
      </div>

      <div className={styles.list}>
        {slots.map((s, idx) => (
          <div
            key={s.id}
            className={`${styles.row} ${s.type === "break" ? styles.breakRow : ""}`}
          >
            <div className={styles.badge}>{s.type === "period" ? idx + 1 : "•"}</div>

            <div className={styles.labelWrap}>
              <div className={styles.label}>{s.label}</div>
            </div>

            <div className={styles.timeBox}>
              <input
                type="time"
                value={s.start}
                onChange={(e) => onChangeTime(s.id, "start", e.target.value)}
              />
              <Clock size={16} />
            </div>

            <div className={styles.arrow}>→</div>

            <div className={styles.timeBox}>
              <input
                type="time"
                value={s.end}
                onChange={(e) => onChangeTime(s.id, "end", e.target.value)}
              />
              <Clock size={16} />
            </div>

            <span className={styles.duration}>{fmtDuration(s.start, s.end)}</span>

            <button type="button" className={styles.removeBtn} onClick={() => onRemove(s.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}