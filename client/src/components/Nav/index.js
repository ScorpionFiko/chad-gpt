import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navigation() {
  if (Auth.loggedIn()) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand px-3">Chad GPT</div>
        <div id="navbarNav">
          <ul className="navbar-nav px-2">
            {" "}
            <li className="nav-item active">
              <Link className="nav-link" to="/dashboard">
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
  } else {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/signup">Signup</Link>
        </li>
        <li className="mx-1">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
