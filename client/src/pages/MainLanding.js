import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Dashboard from './Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_QUESTIONS, QUERY_USER } from '../utils/queries';
import { LOAD_USER, LOAD_QUESTIONS } from '../utils/actions';
import { useEffect } from 'react';
import { idbPromise } from '../utils/helpers';
import Auth from '../utils/auth';

function MainLanding() {

    const dispatch = useDispatch();
    // if token is valid it will return user data
    const { loading: userLoading, data: userData } = useQuery(QUERY_USER);
    const { loading: questionLoading, data: questionData } = useQuery(GET_QUESTIONS);
    useEffect(() => {
        if (Auth.loggedIn()) {
            if (userData) {
                dispatch({
                    type: LOAD_USER,
                    currentUser: userData.user,
                });
                idbPromise('user', 'put', userData.user);

            } else if (!userLoading) {
                idbPromise('user', 'get').then((user) => {
                    dispatch({
                        type: LOAD_USER,
                        currentUser: user[0],
                    });
                });
            }
        }

        if (questionData) {
            dispatch({
              type: LOAD_QUESTIONS,
              workoutQuestions: questionData.workoutQuestions,
            });
            idbPromise('workoutQuestions', 'put', { _id: "WQ", questions: questionData.workoutQuestions })
    
          } else if (!questionLoading) {
            idbPromise('workoutQuestions', 'get').then((workoutQuestions) => {
              dispatch({
                type: LOAD_QUESTIONS,
                workoutQuestions: workoutQuestions[0].questions,
              });
            });
          }
    
    }, [userData, dispatch, userLoading, questionLoading, questionData]);
    const currentUser = useSelector(state => state.currentUser);

    if (!userLoading && Auth.loggedIn() && currentUser?.firstName) {
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