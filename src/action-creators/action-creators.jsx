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
            type: "change option-type",
            payload: data
        })
    }
}
