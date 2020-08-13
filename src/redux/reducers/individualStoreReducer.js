const individualStoreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_STORE':
            return action.payload;
        default:
            return state;
    }
}

export default individualStoreReducer;