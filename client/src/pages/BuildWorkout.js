import React, { useState } from "react";
import Nav from "../components/Nav";
import ExerciseRoutineGenerator from "../components/Question/index";
import { useDispatch, useSelector } from "react-redux";
import { RECORD_ANSWER } from "../utils/actions";



const BuildWorkout = () => {

  const questions = useSelector(state => state.workoutQuestions);
  if (!questions) {
    window.location.assign('/');
  }
  const dispatch = useDispatch();
  // if token is valid it will return user data
  let [questionIdIndex, setQuestionIdIndex] = useState(0);
  let [questionIds, setQuestionIds] = useState(Object.keys(questions));

  const recordAnswer = (event) => {
    event.preventDefault();
    dispatch({
      type: RECORD_ANSWER,
      answer: { questionId: questionIds[questionIdIndex], answer: document.getElementById(questionIds[questionIdIndex]).value }
    })
    if (event.target.id === 'prev' && questionIdIndex > 0) {
      setQuestionIdIndex(questionIdIndex - 1);
    }
    if (event.target.id === 'next') {
      if (questionIdIndex < questionIds.length - 1) {
        setQuestionIdIndex(questionIdIndex + 1);
      } else {
        alert("BuildWorkout")
      }
    }
  }

  return (
    <div>
      <Nav />
      {/* This will render the questions components sequentially and conditionally, followed by an event handler to link back to the workout card */}
      <ExerciseRoutineGenerator question={questions[questionIds[questionIdIndex]]} action={recordAnswer} />
    </div>
  );
};

export default BuildWorkout;
