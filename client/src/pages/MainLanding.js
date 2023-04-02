import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { LOAD_USER } from '../utils/actions';
import { useEffect } from 'react';
import { idbPromise } from '../utils/helpers';

function MainLanding() {

    const dispatch = useDispatch();
    // returns the user or not logged in
    const { loading, data } = useQuery(QUERY_USER);
    useEffect(() => {
        if (data) {
            dispatch({
                type: LOAD_USER,
                currentUser: data.user,
            });
            idbPromise('user', 'put', [...data.user]);

        } else if (!loading) {
            idbPromise('user', 'get').then((user) => {
                dispatch({
                    type:LOAD_USER,
                    currentUser: user,
                });
            });
        }

    }, [data, loading, dispatch]);
    const currentUser = useSelector(state => state.currentUser);
    
    if (loading) {
        return "verifying your credentials";
    }


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