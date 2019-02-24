import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
	palette: {
		common: {
			black: "rgba(105, 105, 105, 1)",
			white: "rgba(255, 255, 255, 1)"
		},
		background: {
			paper: "rgba(255, 255, 255, 1)",
			default: "rgba(247, 244, 244, 1)"
		},
		primary: {
			light: "rgba(85, 243, 199, 0.64)",
			main: "rgba(85, 243, 199, 1)",
			dark: "rgba(78, 221, 181, 1)",
			contrastText: "rgba(251, 251, 251, 1)"
		},
		secondary: {
			light: "#ff4081",
			main: "rgba(255, 255, 255, 1)",
			dark: "#c51162",
			contrastText: "rgba(95, 91, 91, 1)"
		},
		error: {
			light: "#e57373",
			main: "#f44336",
			dark: "#d32f2f",
			contrastText: "#fff"
		},
		text: {
			primary: "rgba(0, 0, 0, 0.87)",
			secondary: "rgba(0, 0, 0, 0.54)",
			disabled: "rgba(0, 0, 0, 0.38)",
			hint: "rgba(0, 0, 0, 0.38)"
		},
		typography: {
			useNextVariants: true
		}
	}
})

export default theme
