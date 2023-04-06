import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import auth from '../../utils/auth';
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_TOGGLE } from '../../utils/actions';

export default function NavMenu(props) {
  const {currentUser, menuOpened} = useSelector(state=>state);
  const navClass = !menuOpened ? 'navbar-collapse overlay overlay-close' : 'navbar-collapse overlay overlay-open';
  const dispatch=useDispatch();


  const handleMenuClick = (event) => {
    event.preventDefault();
    if (event.target.matches('a')) {
      dispatch({
        type: MENU_TOGGLE,
        menuOpened: !menuOpened
      });
      if (event.target.id ==="logout") {
        // clear user from redux
        // dispatch({
        //   type: CLEAR_USER,
        //   currentUser: new Object()
        // });
        // clear user from indexedDb
        idbPromise('user', 'delete', currentUser);
        // clear token
        auth.logout();
      }
    }
  }

  return (     <div id="navbarNav" className={navClass}>
    <ul className="navbar-nav px-2" onClick={handleMenuClick}>
      <li className="nav-item active">
        <Link className="nav-link" to="/" id="dashboard">
          My Dashboard
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/buildWorkout" id='build-workout'>
          Build a Workout
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/" id='logout'>
          Logout
        </Link>
      </li>
    </ul>
  </div>
  );
};