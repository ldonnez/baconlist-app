import { call, put, takeEvery } from "redux-saga/effects"
import * as api from "../../api/oauth"
import * as token from "../../localStorage/token"
import { actions, types } from "./authorization.actions"
import { push } from "connected-react-router"

export function* authorizationFlow (action) {
	try {
		const isExpired = yield call(
			token.isAccessTokenExpired,
			action.payload.accessToken
		)
		if (isExpired) {
			yield* refreshTokenFlow(action)
		}
		yield put(actions.authorizeSuccess({ user: action.payload.accessToken }))
	} catch (e) {
		yield put(actions.authorizeFail({ errors: e }))
		yield put(push("/signin"))
	}
}

function* refreshTokenFlow (action) {
	try {
		const response = yield call(api.refreshToken, action.payload)
		yield call(token.storeToken, response && response.data)
		yield put(actions.refreshTokenSuccess())
	} catch (e) {
		yield put(actions.refreshTokenFail({ errors: e }))
		yield put(push("/signin"))
	}
}

export default function* authorizationSaga () {
	yield takeEvery(types.AUTHORIZE, authorizationFlow)
}
