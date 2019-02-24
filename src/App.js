import React, { Component } from "react"
import JssProvider from "react-jss/lib/JssProvider"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { Provider } from "react-redux"
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from "connected-react-router"
import { create } from "jss"
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles"
import withAuthorization from "./app/components/Authorization"
import DefaultLayout from "./app/components/DefaultLayout"
import routes from "./routes"
import store, { history } from "./store"
import theme from "./theme"

const generateClassName = createGenerateClassName()
const jss = create({
	...jssPreset(),
	insertionPoint: document.getElementById("jss-insertion-point")
})

class App extends Component {
	render () {
		return (
			<JssProvider jss={jss} generateClassName={generateClassName}>
				<MuiThemeProvider theme={theme}>
					<Provider store={store}>
						<ConnectedRouter history={history}>
							<Switch>
								{routes.map(({ path, authorized, component, ...rest }) => {
									return authorized ? (
										<DefaultLayout
											key={path}
											path={path}
											component={withAuthorization(component)}
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
			</JssProvider>
		)
	}
}

export default App
