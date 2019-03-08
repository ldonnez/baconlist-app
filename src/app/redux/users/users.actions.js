import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
  "GET_BY_EMAIL",
  "GET_BY_EMAIL_SUCCESS",
  "GET_BY_EMAIL_FAIL",
  "POST",
  "POST_SUCCESS",
  "POST_FAIL",
  "CLOSE_SUCCESS_DIALOG"
],
"USERS")

export const actions = {
  post: actionCreator(types.POST, "data"),
  postSuccess: actionCreator(types.POST_SUCCESS),
  postFail: actionCreator(types.POST_FAIL, "errors"),

  getByEmail: actionCreator(types.GET_BY_EMAIL, "email"),
  getByEmailSuccess: actionCreator(types.GET_BY_EMAIL_SUCCESS, "data"),
  getByEmailFail: actionCreator(types.GET_BY_EMAIL_FAIL, "errors"),

  closeSuccessDialog: actionCreator(types.CLOSE_SUCCESS_DIALOG),
}
