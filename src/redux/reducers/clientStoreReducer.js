const clientStoreReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_NEW_STORE':
            return action.payload;
        default:
            return state;
    }
}

export default clientStoreReducer;