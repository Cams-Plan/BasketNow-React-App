const trainingTypeReducer = (state = "", action) => {
    switch (action.type) {
        case "change option-type":
            if (action.payload){
                return state = action.payload
            } else {
                return state
            }
            ;
        default:
            return state;
    }
}

export default trainingTypeReducer
