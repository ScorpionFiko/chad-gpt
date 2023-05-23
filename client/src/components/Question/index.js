import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { RECORD_ANSWER } from "../../utils/actions";
import Loading from "../Loading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

/// State to hold user input
function Question() {
  const questions = useSelector((state) => state.workoutQuestions);
  if (!questions) {
    window.location.assign("/");
  }
  const dispatch = useDispatch();
  // if token is valid it will return user data
  let [questionIdIndex, setQuestionIdIndex] = useState(0);
  let [questionIds, setQuestionIds] = useState(Object.keys(questions));
  const question = questions[questionIds[questionIdIndex]];
  const recordAnswer = (event) => {
    event.preventDefault();
    dispatch({
      type: RECORD_ANSWER,
      answer: {
        questionId: questionIds[questionIdIndex],
        answer: document.getElementById(questionIds[questionIdIndex]).value,
      },
    });
    if (event.target.id === "prev" && questionIdIndex > 0) {
      setQuestionIdIndex(questionIdIndex - 1);
    }
    if (event.target.id === "next") {
      if (questionIdIndex < questionIds.length - 1) {
        setQuestionIdIndex(questionIdIndex + 1);
      } else {
        return <Loading />;
      }
    }
  };

  let input = "";
  switch (question.fieldType) {
    case "text":
      break;
    case "textarea":
      break;
    case "range":
      input = (
        <input
          class="length"
          id={question._id}
          type={question.fieldType}
          min={question.minValue}
          max={question.maxValue}
          step={question.stepValue}
          defaultValue="32"
        ></input>
      );
      break;
    case "select":
      input = (
        <select
          id={question._id}
          name={question.fieldName}
          type={question.fieldType}
        >
          {question.optionValues.map((element, index) => (
            <option value={element} key={index}>
              {element}
            </option>
          ))}
          ;
        </select>
      );
      break;
    default:
      break;
  }

  return (
    <div>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <Card className="p-3 mb-5" style={{ marginTop: "150px" }}>
          <Card.Body>
            <form>
              <Row className="d-flex align-items-center justify-content-center">
                {question.question}
              </Row>
              <Row style={{ marginTop: "15px" }}>{input}
              </Row>
              <Row  style={{ marginTop: "15px" }}>
                <Stack className="d-flex align-items-center justify-content-center" direction="horizontal" gap={3}>
                  <Button variant="dark" id="prev" onClick={recordAnswer}>
                    Previous
                  </Button>
                  <Button variant="dark" id="next" onClick={recordAnswer}>
                    Next
                  </Button>
                </Stack>
              </Row>
            </form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Question;
