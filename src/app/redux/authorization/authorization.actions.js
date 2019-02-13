import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes(
  [
    "AUTHORIZE",
    "AUTHORIZE_SUCCESS",
    "AUTHORIZE_FAIL",
    "REFRESH_TOKEN",
    "REFRESH_TOKEN_SUCCESS",
    "REFRESH_TOKEN_FAIL"
  ],
  "AUTHORIZATION"
)

export const actions = {
  authorize: actionCreator(types.AUTHORIZE, "accessToken", "refreshToken"),
  authorizeFail: actionCreator(types.AUTHORIZE_FAIL, "errors"),
  authorizeSuccess: actionCreator(types.AUTHORIZE_SUCCESS),
  refreshToken: actionCreator(types.REFRESH_TOKEN, "refreshToken"),
  refreshTokenSuccess: actionCreator(types.REFRESH_TOKEN_SUCCESS),
  refreshTokenFail: actionCreator(types.REFRESH_TOKEN_FAIL, "errors")
}
