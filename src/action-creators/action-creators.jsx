export const addTrainingBlock = () => {
    return (dispatch) => {
        dispatch({
            type: "add training block", 
            payload: 1
        })
    }
}
