import {createStore} from 'redux'
import {reducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();


let preloadedState = {
    currentUser: {},
    menuOpened: false,
};

  const store = createStore(reducer, preloadedState, composedEnhancers);

  export default store;