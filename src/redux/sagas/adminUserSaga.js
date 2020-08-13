import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getUserList(){
    try{
        const usersResponse = yield axios.get('/api/userlist')
        yield put({ type: 'SET_USER_LIST', payload: usersResponse.data })
    } catch (error) {
        console.log('Error with Userlist GET:', error);
    }
}

function* adminUserSaga(){
    yield takeEvery('GET_USER_LIST', getUserList);
}

export default adminUserSaga;