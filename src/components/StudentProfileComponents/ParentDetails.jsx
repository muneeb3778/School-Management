import "../../styles/StudentsProfileComponentsStyles/ParentDetails.css";

export default function ParentDetails() {
  return (
    <div className="card">
      <h3>Parent / guardian</h3>

      <div className="parent-top">
        <div className="avatar">RN</div>
        <div>
          <h4>Rajesh Nair</h4>
          <p>Father</p>
        </div>
      </div>

      <div className="details-grid">
        <div>
          <p>Mobile</p>
          <h4>+91 98201 45678</h4>
        </div>

        <div>
          <p>Email</p>
          <h4>rajesh@email.com</h4>
        </div>

        <div>
          <p>Occupation</p>
          <h4>Engineer</h4>
        </div>

        <div>
          <p>Login access</p>
          <h4 className="active">Active</h4>
        </div>
      </div>
    </div>
  );
}