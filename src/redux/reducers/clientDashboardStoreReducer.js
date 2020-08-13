const clientDashboardStoreReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'SET_CLIENT_DASHBOARD_STORES':
            return action.payload;
        default:
            return state;
    }
}

export default clientDashboardStoreReducer;