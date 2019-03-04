import usersSaga from "./redux/users/users.saga"
import authenticationSaga from "./redux/authentication/authentication.saga"
import authorizationSaga from "./redux/authorization/authorization.saga"
import listsSaga from "./redux/lists/lists.saga"
import listsShareWithSaga from "./redux/listsShareWith/listsShareWith.saga"
import friendRequestsSaga from "./redux/friendRequests/friendRequests.saga"
import friendsSaga from "./redux/friends/friends.saga"

export default [
  usersSaga,
  authenticationSaga,
  authorizationSaga,
  listsSaga,
  listsShareWithSaga,
  friendRequestsSaga,
  friendsSaga
]
