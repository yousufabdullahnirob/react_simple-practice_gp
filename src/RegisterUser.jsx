import { useParams } from "react-router-dom";

export default function RegisterUser() {
  const { id } = useParams();
  
  return (
    <div className="container mt-5">
      <h2>Register User {id}</h2>
      <div className="mb-3">
        <label className="form-label">Enter details for ID {id}</label>
        <input type="text" className="form-control" placeholder={`Input for user ${id}`} />
      </div>
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}
