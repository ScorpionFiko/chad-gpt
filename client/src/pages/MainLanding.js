import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Login from '../components/Login';
import Signup from '../components/Signup';
import { useSelector } from 'react-redux'
import Auth from '../utils/auth';


function MainLanding() {
    const currentUser = useSelector(state=>state.currentUser);
    if (!currentUser.firstName) {
        return ( 
            <div>
                <Banner />
                <About />
                <div className="flex-wrap" id="landing-input">
                <Login />
                <Signup />
                </div>
            </div> 
        )
    } else {
        return ( <div>TEstPAge</div> )
    }

}

export default MainLanding;