import { combineReducers } from "redux";
//import all my reducers one after the other
import trainingBlockReducer from "./trainingBlockReducer";
import trainingOptionsReducer from "./trainingOptionsReducer";
import trainingTypeReducer from "./trainingTypeReducer";
import trainingDrillsReducer from "./trainingDrillsReducer";

const allReducers = combineReducers({
    numTrainingBlocks: trainingBlockReducer,
    trainingOptions: trainingOptionsReducer,
    trainingType: trainingTypeReducer,
    trainingDrills: trainingDrillsReducer
})

export default allReducers;
