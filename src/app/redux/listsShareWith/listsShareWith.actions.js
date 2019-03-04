import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
  "GET",
  "GET_SUCCESS",
  "GET_FAIL"
],
"LISTS_SHARE_WITH")

export const actions = {
  get: actionCreator(types.GET, "id"),
  getSuccess: actionCreator(types.GET_SUCCESS, "data"),
  getFail: actionCreator(types.GET_FAIL, "errors")
}
