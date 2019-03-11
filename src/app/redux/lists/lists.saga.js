import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/lists"
import { actions, types } from "./lists.actions"
import { actions as notificationActions } from "../notifications/notifications.actions"

export function* getListsFlow (action) {
  try {
    const response = yield call(api.getLists)
    yield put(actions.getSuccess({ data: response && response.data }))
  } catch (e) {
    if (e.response.status === 404) {
      yield put(actions.getSuccess({ data: [] }))
    } else {
      yield put(actions.getFail({ errors: e }))
    }
  }
}

export function* postListsFlow (action) {
  try {
    yield call(api.postLists, action.payload.data)
    yield put(actions.postSuccess())
    yield put(actions.get())
    yield put(notificationActions.show({ id: "postList", message: `${action.payload.data.name} created successfully` }))
  } catch (e) {
    yield put(actions.postFail({ errors: e.response.data }))
  }
}

export function* patchListsFlow (action) {
  try {
    yield call(api.patchLists, action.payload.data)
    yield put(actions.patchSuccess({ data: action.payload.data }))
    yield put(notificationActions.show({ id: "patchList", message: `${action.payload.data.name} updated successfully` }))
  } catch (e) {
    yield put(actions.patchFail({ errors: e.response.data }))
  }
}

export function* deleteListsFlow (action) {
  try {
    yield call(api.deleteLists, action.payload.id)
    yield put(actions.deleteSuccess())
    yield put(actions.get())
    yield put(notificationActions.show({ id: "deleteList", message: "List deleted successfully" }))
  } catch (e) {
    yield put(actions.deleteFail({ errors: e.response.data }))
  }
}

export default function* listsSaga () {
  yield takeLatest(types.GET, getListsFlow)
  yield takeLatest(types.POST, postListsFlow)
  yield takeLatest(types.PATCH, patchListsFlow)
  yield takeLatest(types.DELETE, deleteListsFlow)
}
