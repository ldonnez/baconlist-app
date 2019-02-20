import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/lists"
import { actions, types } from "./lists.actions"

export function* getListsFlow(action) {
	try {
		const response = yield call(api.getLists)
		yield put(actions.getSuccess({ data: response && response.data }))
	} catch (e) {
		yield put(actions.getFail({ errors: e }))
	}
}

export function* postListsFlow(action) {
	try {
		yield call(api.postLists, action.payload.data)
		yield put(actions.postSuccess())
    yield put(actions.get())
	} catch (e) {
		yield put(actions.postFail({ errors: e.response.data }))
	}
}

export default function* usersSaga() {
	yield takeLatest(types.GET, getListsFlow)
	yield takeLatest(types.POST, postListsFlow)
}
