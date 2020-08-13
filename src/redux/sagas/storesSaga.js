import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getStores() {
    try {
        const storeResponse = yield axios.get('/api/store')
        console.log('storeResponse', storeResponse);
        
        yield put({ type: 'SET_STORES', payload: storeResponse.data })
    } catch (error) {
        console.log('Error with store GET:', error);
    }
}

function* getIndividualStore(action) {
    try{
        const individualStoreResponse = yield axios.get(`/api/store/${action.payload}`)
        console.log('individualStoreResponse', individualStoreResponse);
        yield put({ type: 'SET_INDIVIDUAL_STORE', payload: individualStoreResponse.data })
    } catch (error) {
        console.log('Error with individual store GET:', error);
    }
}

function* getStoresForClientDashboard(action){
    const user_id= action.payload.user_id

    try {
        const userStoresResponse = yield axios.get(`/api/clientstore?user_id=${user_id}`);

        yield put({type: 'SET_CLIENT_DASHBOARD_STORES', payload: userStoresResponse.data})
    }catch(error){
        console.log('Error with getStoreForClientDashboard get request', error);
    }
}

function* updateStore(action) {
    try{
        yield axios.put(`/api/store/${action.payload.id}`, action.payload)
        yield put({ type: 'GET_INDIVIDUAL_STORE', payload: action.payload.id })
    } catch (error) {
        console.log('Error with store PUT:', error);
    }
}


function* addNewStore(action) {
    try{
        yield axios.post('/api/store', action.payload)
        yield put({ type: 'GET_STORES' })
    } catch (error) {
        console.log('Error with store POST:', action.payload);
    }
}


function* storesSaga() {
    yield takeEvery('GET_STORES', getStores)
    yield takeEvery('GET_INDIVIDUAL_STORE', getIndividualStore)
    yield takeEvery('UPDATE_STORE', updateStore)
    yield takeEvery('GET_STORE_CLIENT_DASHBOARD', getStoresForClientDashboard)
    yield takeEvery('ADD_NEW_STORE', addNewStore)

}

export default storesSaga;