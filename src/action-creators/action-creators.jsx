export const addTrainingBlock = () => {
    return (dispatch) => {
        dispatch({
            type: "add training block", 
            payload: 1
        })
    }
}

export const sendTrainingOptions = () => {
    return (dispatch) => {
        dispatch({
            type: "send training options"
        })
    }
}

export const changeOptionPeripheral = (data) => {
    return (dispatch) => {
        dispatch({
            type: "CHANGE_OPTION-TYPE",
            KPI: data
        })
    }
}

export const addTrainingDrill = () => {
    return (dispatch) => {
        dispatch({
            type: "ADD_TRAINING_DRILL",
            payload: 1
        })
    }
}

export const removeTrainingDrill = () => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_TRAINING_DRILL",
            payload: 1
        })
    }
}
