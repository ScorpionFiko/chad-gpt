import React from "react";
import "./style.css"


/// State to hold user input
function Question({ question, action }) {
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
          <button id="prev" onClick={action}>Previous</button>
          <button id="next" onClick={action}>Next</button>
        </form>
      </div>
    </>
  );
};

export default Question;










