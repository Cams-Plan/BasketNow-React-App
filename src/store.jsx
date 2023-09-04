import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

//import files
import allReducers from "./reducers";

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)]);

const store = createStore(allReducers, composedFunctions);

export default store;
