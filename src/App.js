import React from "react"
import { StylesProvider } from "@material-ui/styles"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import DefaultLayout from "./app/components/DefaultLayout"
import routes from "./routes"
import store, { history } from "./store"
import theme from "./theme"

function App () {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              {routes.map(({ path, authorized, component, ...rest }) => {
                return authorized ? (
                  <DefaultLayout
                    key={path}
                    path={path}
                    component={component}
                    {...rest}
                  />
                ) : (
                  <Route
                    key={path}
                    path={path}
                    component={component}
                    {...rest}
                  />
                )
              })}
            </Switch>
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default App
