const trainingDrillsReducer = (state = 1, action) => {
    switch (action.type) {
        case "ADD_TRAINING_DRILL":
            return state + action.payload;
        case "REMOVE_TRAINING_BLOCK":
            return state - action.payload
        default:
            return state;
    }
}

export default trainingDrillsReducer;
