import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand px-3">Chad GPT</div>
      <div id="navbarNav">
        <ul className="navbar-nav px-2">
          {" "}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              My Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/buildWorkout">
              Build a Workout
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
