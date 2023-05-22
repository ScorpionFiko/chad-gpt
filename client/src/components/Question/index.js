import React, {useState } from "react";
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { RECORD_ANSWER } from "../../utils/actions";

/// State to hold user input
function Question() {
  const questions = useSelector(state => state.workoutQuestions);
  if (!questions) {
    window.location.assign('/');
  }
  const dispatch = useDispatch();
  // if token is valid it will return user data
  let [questionIdIndex, setQuestionIdIndex] = useState(0);
  let [questionIds, setQuestionIds] = useState(Object.keys(questions));
  const question=questions[questionIds[questionIdIndex]];
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


  return (
    <>
      <div>
        <form style={{paddingTop: '100px'}}>
          question: {question.question}<br></br>
          {input}<br></br>
          <button id="prev" onClick={recordAnswer}>Previous</button>
          <button id="next" onClick={recordAnswer}>Next</button>
        </form>
      </div>
    </>
  );
};

export default Question;










