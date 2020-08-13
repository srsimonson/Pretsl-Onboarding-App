const emailReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EMAIL_SENT':
            return state;
        default:
            return state;
    }
}

export default emailReducer;