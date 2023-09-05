import { combineReducers } from "redux";
//import all my reducers one after the other
import trainingBlockReducer from "./TrainingBlockReducer";
import trainingOptionsReducer from "./trainingOptionsReducer";
import trainingTypeReducer from "./trainingTypeReducer";

const allReducers = combineReducers({
    numTrainingBlocks: trainingBlockReducer,
    trainingOptions: trainingOptionsReducer,
    trainingType: trainingTypeReducer
})

export default allReducers;
