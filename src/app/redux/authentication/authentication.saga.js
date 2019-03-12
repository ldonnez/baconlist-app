import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/oauth"
import * as token from "../../localStorage/token"
import { actions, types } from "./authentication.actions"
import { push } from "connected-react-router"

export function* authenticateFlow (action) {
  try {
    const response = yield call(api.getToken, action.payload.data)
    yield call(token.storeToken, response && response.data)
    yield put(actions.authenticateSuccess())
    yield put(push("/"))
  } catch (e) {
    yield put(actions.authenticateFail({ errors: { password: "E-mail or password is incorrect", email: "E-mail or password is incorrect" } }))
  }
}

export function* logoutFlow (action) {
  try {
    yield call(token.removeTokens)
    yield put(actions.logoutSuccess())
    yield put(push("/signin"))
  } catch (e) {
    yield put(actions.logoutFail())
  }
}

export default function* authenticateSaga () {
  yield takeLatest(types.AUTHENTICATE, authenticateFlow)
  yield takeLatest(types.LOGOUT, logoutFlow)
}
