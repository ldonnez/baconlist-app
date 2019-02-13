import { fork, all }from "redux-saga/effects"
import sagas from "./app/sagas"

export default function* root() {
  yield all(sagas.map(saga => fork(saga)))
}
