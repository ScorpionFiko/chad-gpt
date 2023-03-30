import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Login from '../components/Login';
import Signup from '../components/Signup';



function MainLanding() {
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
}

export default MainLanding;