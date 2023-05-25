import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { LOAD_USER } from '../utils/actions';
import { useEffect } from 'react';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth';

function MainLanding() {

    const dispatch = useDispatch();
    // if token is valid it will return user data
    const { loading, data } = useQuery(QUERY_USER);
    useEffect(() => {
        if (Auth.loggedIn()) {
            if (data) {
                dispatch({
                    type: LOAD_USER,
                    currentUser: data.user,
                });
                idbPromise('user', 'put', data.user);

            } else if (!loading) {
                idbPromise('user', 'get').then((user) => {
                    dispatch({
                        type: LOAD_USER,
                        currentUser: user[0],
                    });
                });
            }
        }
    }, [data, dispatch, loading]);
    const currentUser = useSelector(state => state.currentUser);

    if (!loading && Auth.loggedIn() && currentUser?.firstName) {
        return (
            <div>
                <Dashboard />
            </div>
        )
    } else {
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

}

export default MainLanding;