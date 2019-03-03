import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
  "POST",
  "POST_SUCCESS",
  "POST_FAIL",
  "DELETE",
  "DELETE_SUCCESS",
  "DELETE_FAIL",
  "GET",
  "GET_SUCCESS",
  "GET_FAIL",
  "REFRESH",
  "REFRESH_SUCCESS",
  "REFRESH_FAIL",
  "START_LISTENING",
  "STOP_LISTENING"
],
"FRIEND_REQUESTS")

export const actions = {
  startListening: actionCreator(types.START_LISTENING),
  stopListening: actionCreator(types.STOP_LISTENING),

  get: actionCreator(types.GET),
  getSuccess: actionCreator(types.GET_SUCCESS, "data"),
  getFail: actionCreator(types.GET_FAIL, "errors"),

  refresh: actionCreator(types.REFRESH),
  refreshSuccess: actionCreator(types.REFRESH_SUCCESS, "data"),
  refreshFail: actionCreator(types.REFRESH_FAIL, "errors"),

  post: actionCreator(types.POST, "id"),
  postSuccess: actionCreator(types.POST_SUCCESS),
  postFail: actionCreator(types.POST_FAIL, "errors"),

  delete: actionCreator(types.DELETE, "id"),
  deleteSuccess: actionCreator(types.DELETE_SUCCESS),
  deleteFail: actionCreator(types.DELETE_FAIL, "errors"),
}
