import { useReducer } from "react";
import {

  LOAD_USER
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }
      

    default:
      return state;
  }
};
