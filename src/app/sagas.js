import usersSaga from "./redux/users/users.saga"
import authenticationSaga from "./redux/authentication/authentication.saga"
import authorizationSaga from "./redux/authorization/authorization.saga"
import listsSaga from "./redux/lists/lists.saga"

export default [
  usersSaga,
  authenticationSaga,
  authorizationSaga,
  listsSaga
]
