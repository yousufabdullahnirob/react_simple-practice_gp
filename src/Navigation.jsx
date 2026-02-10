import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-link" to="/register">Register</NavLink>
          <NavLink className="nav-link" to="/hello">Hello</NavLink>
        </div>
      </div>
    </nav>
  );
}
