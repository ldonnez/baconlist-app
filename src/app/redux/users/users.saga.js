import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/users"
import { actions, types } from "./users.actions"

export function* createUsersFlow (action) {
  try {
    const { data } = action.payload
    yield call(api.createUsers, data)
    yield put(actions.postSuccess())
  } catch (e) {
    yield put(actions.postFail({ errors: e.response.data }))
  }
}

export function* getUsersByEmailFlow (action) {
  try {
    const { email } = action.payload
    const response = yield call(api.getByEmail, email)
    yield put(actions.getByEmailSuccess({ data: response && response.data }))
  } catch (e) {
    yield put(actions.getByEmailFail({ errors: e.response.data }))
  }
}

export default function* usersSaga () {
  yield takeLatest(types.POST, createUsersFlow)
  yield takeLatest(types.GET_BY_EMAIL, getUsersByEmailFlow)
}
