export const placeholderAction = (data) = (data) => {
    return (dispatch) => {
        dispatch({
            type: "typeValue", 
            payload: data
        })
    }
}
