import {createStore} from 'redux'
import {reducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancers = composeWithDevTools();


let preloadedState = {
    currentUser: {},
};

  const store = createStore(reducer, preloadedState, composedEnhancers);

  export default store;