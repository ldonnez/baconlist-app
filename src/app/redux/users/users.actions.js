import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
	"POST",
	"POST_SUCCESS",
	"POST_FAIL"
],
"USERS")

export const actions = {
	post: actionCreator(types.POST, "data"),
	postSuccess: actionCreator(types.POST_SUCCESS),
	postFail: actionCreator(types.POST_FAIL, "errors")
}
