import { combineReducers } from "redux";
//import all my reducers one after the other
import trainingBlockReducer from "./TrainingBlockReducer";

const allReducers = combineReducers({
    trainingBlock: trainingBlockReducer
})

export default allReducers;
