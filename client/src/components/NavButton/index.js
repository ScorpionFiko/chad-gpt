import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MENU_TOGGLE } from "../../utils/actions";
import './style.css'

export default function NavButton() {
    const dispatch = useDispatch();
    const { menuOpened } = useSelector(state => state);

    const toggleNavbar = () => {
        dispatch({
            type: MENU_TOGGLE,
            menuOpened: !menuOpened
        });
        
    };
    // prevents scroll when menu is expanded
    // document.getElementsByTagName('body')[0].style.overflow = (menuOpened) ? 'hidden' : 'auto'

    const navButton = !menuOpened ? 'navbar-toggler-icon open' : 'navbar-toggler-icon close'

    return (<button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
    >
        <span className={navButton}></span>
    </button>)


}