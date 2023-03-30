import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navigation() {
  if (Auth.loggedIn()) {
    return (
      <ul>
        <li>
          <Link to="/workoutCard">
            My Workouts{/* This will generate workoutcard components */}
          </Link>
        </li>
        <li className="mx-1">
          <Link to="/buildWorkout">
            Build a Workout{/* This will link to buildworkout page */}
          </Link>
        </li>
        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </ul>
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
