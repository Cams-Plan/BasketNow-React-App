const placeholderReducer = (state = '', action) => {
    switch (action.type) {
        case "typeValue":
            return state + action.payload;
        case "typeValue":
            return state + action.payload
        default:
            return state;
    }
}

export default placeholderReducer
