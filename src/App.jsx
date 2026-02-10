import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorPage";
import Navigation from "./Navigation";
import Layout from "../Layout/Layout";
import UserDetails from "./UserDetails";
import RegisterUser from "./RegisterUser";
import Grandparent from "./Grandparent";

export default function App() {
const [users,setUsers] = useState([]);

useEffect(() => {
  fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(data => setUsers(data.users))
    .then (console.log)
    .catch(err => console.error("Failed to fetch users:", err));
}, []);

  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={
          <div className="row">
            {users.map(user => (
              <div className="card" style={{ width: '18rem' }} key={user.id}>
                <img className="card-img-top" src={user.image} alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                  <p className="card-text">{user.email}</p>
                  <Link to={`/user/${user.id}`} className="btn btn-primary">View User</Link>
                  <Link to={`/register/${user.id}`} className="btn btn-secondary ms-2">Register</Link>
                </div>
              </div>
            ))}
          </div>
        } />
        <Route path="/login" 
        errorElement={<ErrorBoundary />}
        element={
          <div>WhatsApp Bengali</div>
        } />
        <Route path="/register" 
        element={
          <Layout>
            <div>register</div>
          </Layout>
        }
        errorElement={<ErrorBoundary />} />

        {/* Dynamic Route for Register with ID */}
        <Route path="/register/:id" element={<RegisterUser />} />

        <Route path="/hello" 
        element={<div>hello</div>}
        errorElement={<ErrorBoundary />} />

        {/* Changed from /users/:id to /user/:id per request */}
        <Route path="/user/:id" element={<UserDetails />} />

        <Route path="*" element={
          <div className="container mt-5 text-center">
            <h1>404</h1>
            <p>Page Not Found</p>
            <a href="/" className="btn btn-primary">Go Home</a>
          </div>
        } />
      </Routes>
      <Grandparent message="Hello from App!" />
    </>
  );
}
