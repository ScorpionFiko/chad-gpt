import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux'
import { idbPromise } from '../../utils/helpers';

function Navigation() {
  const [collapsed, setCollapsed] = useState(true);
  const {currentUser} = useSelector(state=>state);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const closeNavbar = () => {
    if (!collapsed) setCollapsed(true);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    // clear user from redux
    // dispatch({
    //   type: CLEAR_USER,
    //   currentUser: new Object()
    // });
    // clear user from indexedDb
    idbPromise('user', 'delete', currentUser);
    // clear token
    Auth.logout();
  }

  const navClass = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse';

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="navbar-brand px-3">Chad GPT</div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" className={navClass}>
        <ul className="navbar-nav px-2" onClick={closeNavbar}>
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
            <a
              className="nav-link"
              href="/"
              onClick={handleLogout}
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;