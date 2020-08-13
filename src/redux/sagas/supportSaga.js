import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getTickets() {
    try {
        const ticketsResponse = yield axios.get('/api/support')
        console.log('ticketsResponse', ticketsResponse);
        
        yield put({ 
            type: 'SET_TICKETS', 
            payload: ticketsResponse.data 
        })
    } catch (error) {
        console.log('Error with support GET:', error);
    }
}

function* createNewTicket(action) {
    try {
        yield axios.post('/api/support', action.payload)
    } catch (error) {
        console.log('ERROR with support POST:', error);
    }
}

function* updateTicket(action) {
    try {
        yield axios.put(`/api/support/${action.payload.ticketId}`, action.payload)
        yield put({ type: 'GET_TICKETS' })
    } catch (error) {
        console.log('Error with support PUT:', error);
    }
}

function* supportSaga() {
    yield takeEvery('GET_TICKETS', getTickets)
    yield takeLatest('CREATE_NEW_TICKET', createNewTicket)
    yield takeEvery('UPDATE_TICKET_STATUS', updateTicket)
}

export default supportSaga;