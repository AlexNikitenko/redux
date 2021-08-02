import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducerCount1 from './reducers/count1';
import reducerCount2 from './reducers/count2';
// import catState from './reducers/newCat';
import dogState from './reducers/newDog';
// import prevState from './reducers/prevDog';


const rootReducer = combineReducers({
  count1: reducerCount1,
  count2: reducerCount2,
  // urlCat: catState,
  urlDog: dogState,
  dogBreed: dogState,
  prevDog: dogState,
  // prevUrl: prevState,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;