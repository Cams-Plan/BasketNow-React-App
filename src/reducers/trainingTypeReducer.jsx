const trainingTypeReducer = (state = '', action) => {
    switch (action.type) {
        case "CHANGE_OPTION-TYPE":
            return state = action.KPI;
        default:
            return state;
    }
}

export default trainingTypeReducer
