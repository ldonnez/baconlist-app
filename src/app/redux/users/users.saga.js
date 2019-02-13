import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/users"
import { actions, types } from "./users.actions"

export function* createUsersFlow(action) {
	try {
		const { data } = action.payload
		yield call(api.createUsers, data)
		yield put(actions.postSuccess())
	} catch (e) {
		yield put(actions.postFail({ errors: e.response.data }))
	}
}

export default function* usersSaga() {
	yield takeLatest(types.POST, createUsersFlow)
}
