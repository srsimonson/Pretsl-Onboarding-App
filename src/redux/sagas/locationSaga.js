import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getLocations() {
    try{
    const locationResponse = yield axios.get('/api/location')
    yield put({ type: 'SET_LOCATIONS', payload: locationResponse.data })
    } catch (error) {
        console.log('Error with locations GET:', error);
    }
}

function* postLocation(action){
    try{
        yield axios.post('/api/location', action.payload);
        yield put({type: 'GET_LOCATIONS'});
    }catch(error){
        console.log('error with location Post', error);
    }

    try {
        const locationResponse = yield axios.get('/api/location');
        yield put({type: 'SET_LOCATIONS', payload: locationResponse.data})
    }catch(error){
        console.log('Error with exercise_events get request', error);
    }

}

function* locationSaga() {
    yield takeEvery('GET_LOCATIONS', getLocations)
    yield takeEvery('POST_LOCATION', postLocation)
}

export default locationSaga;