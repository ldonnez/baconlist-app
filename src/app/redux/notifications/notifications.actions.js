import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
  "SHOW",
  "HIDE"
],
"NOTIFICATIONS")

export const actions = {
  show: actionCreator(types.SHOW, "id", "message"),
  hide: actionCreator(types.HIDE, "id")
}
