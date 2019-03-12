import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
  "AUTHENTICATE",
  "AUTHENTICATE_SUCCESS",
  "AUTHENTICATE_FAIL",
  "LOGOUT",
  "LOGOUT_SUCCESS",
  "LOGOUT_FAIL"
], "AUTHENTICATION")

export const actions = {
  authenticate: actionCreator(types.AUTHENTICATE, "data"),
  authenticateFail: actionCreator(types.AUTHENTICATE_FAIL, "errors"),
  authenticateSuccess: actionCreator(types.AUTHENTICATE_SUCCESS),

  logout: actionCreator(types.LOGOUT),
  logoutFail: actionCreator(types.LOGOUT_FAIL, "errors"),
  logoutSuccess: actionCreator(types.LOGOUT_SUCCESS)
}
