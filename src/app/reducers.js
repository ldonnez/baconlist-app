import usersReducer from "./redux/users/users.reducer"
import authenticationReducer from "./redux/authentication/authentication.reducer"
import authorizationReducer from "./redux/authorization/authorization.reducer"
import listsReducer from "./redux/lists/lists.reducer"
import friendRequestsReducer from "./redux/friendRequests/friendRequests.reducer"
import friendsReducer from "./redux/friends/friends.reducer"

export default {
  users: usersReducer,
  authentication: authenticationReducer,
  authorization: authorizationReducer,
  lists: listsReducer,
  friendRequests: friendRequestsReducer,
  friends: friendsReducer
}
