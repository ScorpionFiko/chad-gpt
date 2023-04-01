import { useReducer } from "react";
import {
  UPDATE_USER,
  LOAD_USER
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
  
    default:
      return state;
  }
};
