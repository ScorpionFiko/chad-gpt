
import {
  UPDATE_USER,
  LOAD_USER,
  MENU_TOGGLE,
  LOAD_QUESTIONS,
  RECORD_ANSWER,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }

    case UPDATE_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          workouts: action.workouts
        },

      }

    case MENU_TOGGLE:
      return {
        ...state,
        menuOpened: action.menuOpened
      }
    case LOAD_QUESTIONS: {
      const workoutQuestions = {};
      action.workoutQuestions.forEach(question => {
        workoutQuestions[question._id] = question
      })
      //state.entities = workoutQuestions
      return {
        ...state,
        workoutQuestions: workoutQuestions
      }
    }

    case RECORD_ANSWER: {
      const workoutQuestions = { ...state.workoutQuestions };
      workoutQuestions[action.answer.questionId] = { ...workoutQuestions[action.answer.questionId], answer: action.answer.answer }
      return {
        ...state,
        workoutQuestions: workoutQuestions
      }
    }

    default:
      return state;
  }
};
