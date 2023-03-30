import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from './Dashboard';
import { useSelector } from 'react-redux'


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
        return ( 
        <div>
            <Dashboard />
        </div> 
        )
    }

}

export default MainLanding;