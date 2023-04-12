
import {
  UPDATE_USER,
  LOAD_USER,
  MENU_TOGGLE
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
  
    default:
      return state;
  }
};
