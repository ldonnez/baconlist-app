import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/lists"
import { actions, types } from "./listsShareWith.actions"

export function* getListsShareWithFlow (action) {
  try {
    const response = yield call(api.getListsShareWith, action.payload.id)
    yield put(actions.getSuccess({ data: response && response.data }))
  } catch (e) {
    if (e.response.status === 404) {
      yield put(actions.getSuccess({ data: [] }))
    } else {
      yield put(actions.getFail({ errors: e }))
    }
  }
}

export default function* listsShareWithSaga () {
  yield takeLatest(types.GET, getListsShareWithFlow)
}
