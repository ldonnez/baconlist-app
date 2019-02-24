import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import reducers from "./app/reducers"

export default history =>
	combineReducers({
		router: connectRouter(history),
		...reducers
	})
