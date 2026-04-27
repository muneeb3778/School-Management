import "../../styles/StudentsProfileComponentsStyles/PersonalDetails.css";

export default function PersonalDetails() {
  return (
    <div className="card">
      <h3>Personal details</h3>

      <div className="details-grid">
        <div>
          <p>Date of birth</p>
          <h4>12 Mar 2010</h4>
        </div>

        <div>
          <p>Gender</p>
          <h4>Male</h4>
        </div>

        <div>
          <p>Blood group</p>
          <h4>O+</h4>
        </div>

        <div>
          <p>Admission date</p>
          <h4>June 2018</h4>
        </div>

        <div>
          <p>Category</p>
          <h4>General</h4>
        </div>

        <div>
          <p>Transport</p>
          <h4>School bus</h4>
        </div>
      </div>

      <hr />

      <div>
        <p>Address</p>
        <h4>42, Shanti Nagar, Bhopal</h4>
        <span>Madhya Pradesh - 462001</span>
      </div>
    </div>
  );
}