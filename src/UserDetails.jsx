import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Failed to fetch user:", err));
  }, [id]);

  if (!user) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "500px" }}>
        <img src={user.image} className="card-img-top" alt={user.firstName} />
        <div className="card-body">
          <h2 className="card-title">{user.firstName} {user.lastName}</h2>
          <p className="card-text"><strong>Email:</strong> {user.email}</p>
          <p className="card-text"><strong>Phone:</strong> {user.phone}</p>
          <p className="card-text"><strong>Address:</strong> {user.address?.address}, {user.address?.city}</p>
          <p className="card-text"><strong>Company:</strong> {user.company?.name}</p>
          <Link to="/" className="btn btn-secondary mt-3">Back to List</Link>
        </div>
      </div>
    </div>
  );
}
