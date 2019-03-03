import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/friends"
import { actions, types } from "./friends.actions"
import { actions as friendRequestActions } from "../friendRequests/friendRequests.actions"

export function* getFriendsFlow (action) {
  try {
    const response = yield call(api.getFriends)
    yield put(actions.getSuccess({ data: response && response.data }))
  } catch (e) {
    if (e.response.status === 404) {
		  yield put(actions.getSuccess({ data: [] }))
    } else {
		  yield put(actions.getFail({ errors: e }))
    }
  }
}

export function* postFriendsFlow (action) {
  try {
    yield call(api.postFriends, action.payload.id)
    yield put(actions.postSuccess())
    yield put(friendRequestActions.refresh())
    yield put(actions.get())
  } catch (e) {
    yield put(actions.postFail({ errors: e.response.data }))
  }
}

export function* deleteFriendsFlow (action) {
  try {
    yield call(api.deleteFriends, action.payload.id)
    yield put(actions.deleteSuccess())
    yield put(actions.get())
  } catch (e) {
    yield put(actions.deleteFail({ errors: e.response.data }))
  }
}

export default function* friendsSaga () {
  yield takeLatest(types.GET, getFriendsFlow)
  yield takeLatest(types.POST, postFriendsFlow)
  yield takeLatest(types.DELETE, deleteFriendsFlow)
}
