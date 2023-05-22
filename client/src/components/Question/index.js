import React, { useState } from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { RECORD_ANSWER } from "../../utils/actions";
import Loading from "../Loading";
import { getOpenAIResponse } from "../../utils/API";
import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../../utils/actions";
import { SAVE_WORKOUT } from "../../utils/mutations";
import { useHistory } from "react-router-dom";
import { idbPromise } from "../../utils/helpers";

/// State to hold user input
function Question() {
  const questions = useSelector(state => state.workoutQuestions);
  if (!questions) {
    window.location.assign('/');
  }
  const dispatch = useDispatch();
  // if token is valid it will return user data
  const [questionIdIndex, setQuestionIdIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questionIds, setQuestionIds] = useState(Object.keys(questions));
  const question = questions[questionIds[questionIdIndex]];
  const [saveWorkout] = useMutation(SAVE_WORKOUT);
  const history = useHistory();
  let fitnessInfo = {}
  // const createWorkout = async () => {
   
 

  //   try {
  //       const response = await getOpenAIResponse(fitnessInfo);
  //       const { exerciseRoutine } = JSON.parse(JSON.stringify(JSON.parse(response.data.replace(/,\s*]/g, "]").replace(/,\s*}/g, "}")), (k, v) => v && typeof v === 'object' ? v : '' + v))
  //       if (exerciseRoutine.length > 0) {
  //           const { data } = await saveWorkout({
  //               variables: {
  //                   workoutName: `${fitnessInfo.fitnessGoal}: ${new Date(Date.now()).toUTCString()}`,
  //                   routine: exerciseRoutine,
  //               },
  //           });
  //           // update global state
  //           dispatch({
  //               type: UPDATE_USER,
  //               workouts: data.saveWorkout.workouts
  //           });
  //           // update local database
  //           idbPromise('user', 'put', data.saveWorkout);
  //       }

  //   } catch (error) {
  //       console.error("Error parsing response:", error);
  //   }


  //   // // Redirect to the dashboard after the API call is complete
  //   // redirectToDashboard();



  //   // // Function to redirect to the dashboard
  //   // const redirectToDashboard = () => {
  //   //     history.push("/");
  //   // };

  //   //window.location.assign('/');

  // }

 
 
  const recordAnswer = (event) => {
    event.preventDefault();
    dispatch({
      type: RECORD_ANSWER,
      answer: { questionId: questionIds[questionIdIndex], answer: document.getElementById(questionIds[questionIdIndex]).value }
    })
    //record data in the formfields

    if (event.target.id === 'prev' && questionIdIndex > 0) {
      setQuestionIdIndex(questionIdIndex - 1);
    }
    if (event.target.id === 'next') {
      if (questionIdIndex < questionIds.length - 1) {
        setQuestionIdIndex(questionIdIndex + 1);
      } else {
        setIsLoading(true);
        Object.values(questions).forEach((question) => {
          fitnessInfo = {
            [question.fieldName] : question.answer
          }
  
        })
      }
    }
  }



  let input = ""
  switch (question.fieldType) {
    case "text":
      break;
    case "textarea":
      break;
    case "range":
      input = (<input class="length" id={question._id} type={question.fieldType} min={question.minValue} max={question.maxValue} step={question.stepValue} defaultValue="32"></input>)
      break;
    case "select":
      input = (<select id={question._id} name={question.fieldName} type={question.fieldType}>
        {question.optionValues.map((element, index) =>
          <option value={element} key={index}>{element}</option>
        )};
      </select>);
      break;
    default:
      break;
  }

  if (isLoading) {
    // createWorkout()
    return <Loading />
  }
  else {
    return (
      <>
        <div>
          <form >
            question: {question.question}<br></br>
            {input}<br></br>
            <button id="prev" onClick={recordAnswer}>Previous</button>
            <button id="next" onClick={recordAnswer}>Next</button>
          </form>
        </div>
      </>
    );
  }
};

export default Question;










