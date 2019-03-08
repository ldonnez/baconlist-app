import { call, put, take, takeLatest } from "redux-saga/effects"
import * as channels from "../../channels/friendRequests"
import * as api from "../../api/friendRequests"
import { actions, types } from "./friendRequests.actions"

export function* watchFriendRequests (action) {
  const type = action.type
  const eventChannel = yield call(channels.friendRequestsChannel)
  if (type === types.START_LISTENING) {
    while (true) {
      try {
        const payload = yield take(eventChannel)
        yield put(actions.getSuccess({ data: payload }))
      } catch(e) {
        yield put(actions.getFail({ errors: e }))
        yield put(actions.stopListening())
        eventChannel.close()
      }
    }
  } else if (type === types.STOP_LISTENING) {
    eventChannel.close()
  }
}

export function* refreshFriendRequestsFlow (action) {
  try {
    yield put(actions.stopListening())
    const response = yield call(api.getFriendRequests)
    yield put(actions.refreshSuccess({ data: response && response.data }))
    yield put(actions.startListening())
  } catch (e) {
    if (e.response.status === 404) {
		  yield put(actions.refreshSuccess({ data: [] }))
      yield put(actions.startListening())
    } else {
      yield put(actions.refreshFail({ errors: e.response.data }))
    }
  }
}

export function* postFriendRequestsFlow (action) {
  try {
    yield call(api.postFriendRequests, action.payload.id)
    yield put(actions.postSuccess())
  } catch (e) {
    yield put(actions.postFail({ errors: e.response.data }))
  }
}

export function* deleteFriendRequestsFlow (action) {
  try {
    yield call(api.deleteFriendRequests, action.payload.id)
    yield put(actions.deleteSuccess())
    yield put(actions.refresh())
  } catch (e) {
    yield put(actions.deleteFail({ errors: e.response.data }))
  }
}



export default function* friendRequestsSaga () {
  yield takeLatest([types.START_LISTENING, types.STOP_LISTENING], watchFriendRequests)
  yield takeLatest(types.REFRESH, refreshFriendRequestsFlow)
  yield takeLatest(types.POST, postFriendRequestsFlow)
  yield takeLatest(types.DELETE, deleteFriendRequestsFlow)
}
