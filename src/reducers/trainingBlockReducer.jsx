const trainingBlockReducer = (state = 0, action) => {
    switch (action.type) {
        case "add training block":
            return state + action.payload;
        default:
            return state;
    }
}

export default trainingBlockReducer;
