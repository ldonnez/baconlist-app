import React from "react"
import { StyledAppBar } from "./style"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"

export default class AppBar extends React.PureComponent {
	render () {
		return (
			<StyledAppBar color="secondary" position="fixed" elevation={1}>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap />
				</Toolbar>
			</StyledAppBar>
		)
	}
}
