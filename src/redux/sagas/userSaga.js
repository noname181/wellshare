import { call, put, takeEvery } from 'redux-saga/effects';

function getApi() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('foo');
        }, 300);
    });
    return myPromise.then(res => console.log(res));
}

function* fetchUsers() {
    try {
        const user = yield call(getApi);

    } catch (e) {
        console.log(e)
    }
}

function* userSaga() {
    yield takeEvery('GET_USER_REQUESTED', fetchUsers)
}

export default userSaga;