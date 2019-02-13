import { createTypes, actionCreator, async } from "redux-action-creator"

export const types = createTypes([
	...async("AUTHENTICATE"),
	"AUTHENTICATE_SUCCESS",
	"AUTHENTICATE_FAIL",
	""],
"AUTHENTICATION")

export const actions = {
	authenticate: actionCreator(types.AUTHENTICATE, "data"),
	authenticateFail: actionCreator(types.AUTHENTICATE_FAIL, "errors"),
	authenticateSuccess: actionCreator(types.AUTHENTICATE_SUCCESS)
}
