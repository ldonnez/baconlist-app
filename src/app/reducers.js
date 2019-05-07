import usersReducer from "./redux/users/users.reducer"
import authenticationReducer from "./redux/authentication/authentication.reducer"
import authorizationReducer from "./redux/authorization/authorization.reducer"
import listsReducer from "./redux/lists/lists.reducer"
import listsShareWithReducer from "./redux/listsShareWith/listsShareWith.reducer"
import friendRequestsReducer from "./redux/friendRequests/friendRequests.reducer"
import friendsReducer from "./redux/friends/friends.reducer"
import notificationsReducer from "./redux/notifications/notifications.reducer"
import versionReducer from "./redux/version/version.reducer"

export default {
  users: usersReducer,
  authentication: authenticationReducer,
  authorization: authorizationReducer,
  lists: listsReducer,
  listsShareWith: listsShareWithReducer,
  friendRequests: friendRequestsReducer,
  friends: friendsReducer,
  notifications: notificationsReducer,
  version: versionReducer
}
