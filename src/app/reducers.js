import usersReducer from "./redux/users/users.reducer"
import authenticationReducer from "./redux/authentication/authentication.reducer"
import authorizationReducer from "./redux/authorization/authorization.reducer"
import listsReducer from "./redux/lists/lists.reducer"

export default {
	users: usersReducer,
	authentication: authenticationReducer,
	authorization: authorizationReducer,
  lists: listsReducer
}
