import React, { useState, useEffect } from "react";
// import styles
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { SAVE_WORKOUT } from "../../utils/mutations";
import { UPDATE_USER } from "../../utils/actions";
import { getOpenAIResponse } from "../../utils/API";
import { idbPromise } from "../../utils/helpers";

const exerciseQuotes = [
  "A one-hour workout is 4% of your day. No excuses.",
  "Fitness is not about being better than someone else. It's about being better than you used to be.",
  "The only bad workout is the one that didn't happen.",
  "Sweat is just fat crying.",
  "The difference between try and triumph is just a little umph!",
  "Your body can stand almost anything. It's your mind that you have to convince.",
  "The only way to finish is to start.",
  "Strive for progress, not perfection.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "It's not about having time. It's about making time.",
];

function Loading() {
  const [quote, setQuote] = useState("The pain you feel today will be the strength you feel tomorrow.");
  const {workoutQuestions} = useSelector(state=>state)
  const [saveWorkout] = useMutation(SAVE_WORKOUT);
  const history = useHistory();
  const dispatch = useDispatch();

  const createWorkout = async () => {
    let fitnessInfo = {}
    Object.values(workoutQuestions).forEach((question) => {
      fitnessInfo[question.fieldName] = question.answer
    });

    try {
      const response = await getOpenAIResponse(fitnessInfo);
      const { exerciseRoutine } = JSON.parse(JSON.stringify(JSON.parse(response.data.replace(/,\s*]/g, "]").replace(/,\s*}/g, "}")), (k, v) => v && typeof v === 'object' ? v : '' + v))
      if (exerciseRoutine.length > 0) {
        const { data } = await saveWorkout({
          variables: {
            workoutName: `${fitnessInfo.fitnessGoal}: ${new Date(Date.now()).toUTCString()}`,
            routine: exerciseRoutine,
          },
        });
        // update global state
        dispatch({
          type: UPDATE_USER,
          workouts: data.saveWorkout.workouts
        });
        // update local database
        idbPromise('user', 'put', data.saveWorkout);
      }

    } catch (error) {
      console.error("Error parsing response:", error);
    }
    history.push("/");
  }
// useEffect hook is used to run the code inside the callback function only once when the component is mounted
  useEffect(() => {
    let index = 0;
    //alert(workoutQuestions['646bdbdf951164deba5721d4']);
    
    const intervalId = setInterval(() => {
      setQuote(exerciseQuotes[index]);
      index = (index + 1) % exerciseQuotes.length;
    }, 5000);
    createWorkout();
    return () => clearInterval(intervalId);
  }, [createWorkout]); // Updated the dependency array to an empty array

  return (

      <div className="container">
        <div className="container-xl">
          <h1 className="text-center">Patience. The Chad is working...</h1>
          <div className="lds-spinner d-flex justify-content-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <p className="text-center quote">{quote}</p>
        </div>
      </div>

  );
}

export default Loading;