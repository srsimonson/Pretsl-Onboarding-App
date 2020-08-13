import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* updateAWSBucket(action){
    //problem, how do I pass the file to the server side
    //then how do I read the file into the bucket.
}

function* awsBucketSaga(){
    yield takeEvery('UPDATE_AWS_BUCKET', updateAWSBucket) 
}

export default awsBucketSaga;