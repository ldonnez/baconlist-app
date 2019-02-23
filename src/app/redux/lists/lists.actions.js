import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes(
  [
    "POST",
    "POST_SUCCESS",
    "POST_FAIL",
    "PATCH",
    "PATCH_SUCCESS",
    "PATCH_FAIL",
    "GET",
    "GET_SUCCESS",
    "GET_FAIL"
  ],
  "LISTS"
)

export const actions = {
  get: actionCreator(types.GET),
  getSuccess: actionCreator(types.GET_SUCCESS, "data"),
  getFail: actionCreator(types.GET_FAIL, "errors"),

  post: actionCreator(types.POST, "data"),
  postSuccess: actionCreator(types.POST_SUCCESS),
  postFail: actionCreator(types.POST_FAIL, "errors"),

  patch: actionCreator(types.PATCH, "data"),
  patchSuccess: actionCreator(types.PATCH_SUCCESS, "data"),
  patchFail: actionCreator(types.PATCH_FAIL, "errors")
}
