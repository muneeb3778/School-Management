import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddStudent.module.css";

import Sidebar from "../../../../components/Sidebar/Sidebar";
import Topbar from "../../../../components/Topbar/Topbar";
import { AppContext } from "../../../../context/Contextapi";

function makeId() {
  // Temporary unique-ish id
  return `STU-${String(Date.now()).slice(-4)}`;
}

export default function AddStudent() {
  const navigate = useNavigate();
  const { studentsData, addStudent } = useContext(AppContext)

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    className: "6",
    section: "A",
    phone: "",
    gender: "Male",
    dob: "",
    bloodGroup: "",
    admissionDate: "",
    parentName: "",
    parentMobile: "",
    parentEmail: "",
    addressLine1: "",
    addressLine2: "",
  });

  const rollNo = useMemo(() => studentsData.length + 1, [studentsData.length]);

  const onChange = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    const id = makeId();
    const fullName = `${form.firstName} ${form.lastName}`.trim();

    if (!fullName || !form.phone) {
      alert("Please enter name and phone.");
      return;
    }

    const newStudent = {
      id,
      name: fullName,
      class: `${form.className} - ${form.section}`,
      phone: form.phone,
      fee: "New",

      gender: form.gender,
      dob: form.dob || "-",
      bloodGroup: form.bloodGroup || "-",
      admissionDate: form.admissionDate || "-",
      category: "General",
      transport: "Not assigned",
      address: `${form.addressLine1}${form.addressLine2 ? `\n${form.addressLine2}` : ""}`,

      rollNo,
      attendance: 0,
      avgGrade: "Pending",

      parentName: form.parentName || "-",
      parentRelation: "Parent",
      parentMobile: form.parentMobile || "-",
      parentEmail: form.parentEmail || "-",
      parentOccupation: "-",

      subjects: [],
      attendanceByWeek: [],
      feeHistory: [],
      notesAndRemarks: [],
    };

    addStudent(newStudent);
    navigate("/students", { replace: true });
  };

  return (
    <div className={styles.layout}>
      <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <div className={styles.main}>
        <Topbar
          type="students"
          title="Add new student"
          subtitle="Students • New enrollment"
          onMenuClick={() => setDrawerOpen(true)}
          onExport={null}
          onAddStudent={null}
        />

        <div className={styles.content}>
          <form className={`card ${styles.formCard}`} onSubmit={onSubmit}>
            <div className={styles.formLayout}>
              {/* Photo box */}
              <div className={styles.photoBox}>
                <div className={styles.photoInner}>
                  <div className={styles.photoCircle} />
                  <p className={styles.photoText}>Photo</p>
                </div>
              </div>

              {/* Fields */}
              <div className={styles.formRight}>
                <h3 className={styles.sectionTitle}>Personal information</h3>

                <div className={styles.grid2}>
                  <div className={styles.field}>
                    <label>First name *</label>
                    <input value={form.firstName} onChange={onChange("firstName")} />
                  </div>

                  <div className={styles.field}>
                    <label>Last name *</label>
                    <input value={form.lastName} onChange={onChange("lastName")} />
                  </div>

                  <div className={styles.field}>
                    <label>Date of birth</label>
                    <input type="date" value={form.dob} onChange={onChange("dob")} />
                  </div>

                  <div className={styles.field}>
                    <label>Gender</label>
                    <select value={form.gender} onChange={onChange("gender")}>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label>Blood group</label>
                    <input value={form.bloodGroup} onChange={onChange("bloodGroup")} placeholder="e.g. B+" />
                  </div>

                  <div className={styles.field}>
                    <label>Phone *</label>
                    <input value={form.phone} onChange={onChange("phone")} placeholder="+91..." />
                  </div>
                </div>

                <hr className={styles.divider} />

                <h3 className={styles.sectionTitle}>Admission details</h3>

                <div className={styles.grid2}>
                  <div className={styles.field}>
                    <label>Class</label>
                    <input value={form.className} onChange={onChange("className")} placeholder="6" />
                  </div>

                  <div className={styles.field}>
                    <label>Section</label>
                    <input value={form.section} onChange={onChange("section")} placeholder="A" />
                  </div>

                  <div className={styles.field}>
                    <label>Roll number</label>
                    <input value={`Auto-assigned: ${rollNo}`} disabled />
                  </div>

                  <div className={styles.field}>
                    <label>Admission date</label>
                    <input type="date" value={form.admissionDate} onChange={onChange("admissionDate")} />
                  </div>
                </div>

                <hr className={styles.divider} />

                <h3 className={styles.sectionTitle}>Parent / Guardian</h3>

                <div className={styles.grid2}>
                  <div className={styles.field}>
                    <label>Parent name</label>
                    <input value={form.parentName} onChange={onChange("parentName")} />
                  </div>

                  <div className={styles.field}>
                    <label>Primary phone</label>
                    <input value={form.parentMobile} onChange={onChange("parentMobile")} />
                  </div>

                  <div className={styles.fieldFull}>
                    <label>Email</label>
                    <input value={form.parentEmail} onChange={onChange("parentEmail")} />
                  </div>

                  <div className={styles.fieldFull}>
                    <label>Address</label>
                    <input
                      value={form.addressLine1}
                      onChange={onChange("addressLine1")}
                      placeholder="House no., street, city"
                    />
                    <input
                      className={styles.mt8}
                      value={form.addressLine2}
                      onChange={onChange("addressLine2")}
                      placeholder="State - Pincode"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.footerBar}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => navigate("/students", { replace: true })}
              >
                Cancel
              </button>

              <button type="submit" className={styles.submitBtn}>
                Enroll student →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}