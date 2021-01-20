import { call, put, takeLatest } from 'redux-saga/effects';

function* fetchSaga(action) {
	try {
		const query = yield call(() => {
			return fetch()
				.then((response) => response.json())
		});
		yield put({ type: 'SAGA_SUCCEEDED', result: query });
	} catch (e) {
		yield put({ type: 'SAGA_FAILED', error: e.message });
	}
}

function* saga() {
	yield takeLatest('SAGA', fetchSaga);
}

export default saga;
