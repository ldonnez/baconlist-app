import { createBrowserHistory } from "history"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { routerMiddleware } from "connected-react-router"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"
import sagas from "./sagas"

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const middlewares = [routerMiddleware(history), sagaMiddleware]

const composedMiddlewares = composeWithDevTools(
  applyMiddleware(...middlewares)
)

const store = createStore(rootReducer(history), composedMiddlewares)

sagaMiddleware.run(sagas)

export default store
