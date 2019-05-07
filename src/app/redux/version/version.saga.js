import { call, put, takeLatest } from "redux-saga/effects"
import * as api from "../../api/version"
import { actions, types } from "./version.actions"
import { storeVersion, getVersion } from "app/localStorage/version"

export function* upgradeVersionFlow (action) {
  try {
    const response = yield call(api.getVersion)
    const version = response && response.data
    const storedVersion = yield call(getVersion)
    if (!storedVersion || storedVersion < version) {
      yield call(storeVersion, version)
      yield call(refresh)
    }
    yield put(actions.upgradeSuccess({ data: version }))
  } catch (e) {
    yield put(actions.upgradeFail({ errors: e }))
  }
}

export function refresh () {
  const url = window.location.origin
  const pathname = window.location.pathname
  const hash = window.location.hash
  window.location = url + pathname + "?application_refresh=" + (Math.random() * 100000) + hash
}

export default function* versionSaga () {
  yield takeLatest(types.UPGRADE, upgradeVersionFlow)
}
