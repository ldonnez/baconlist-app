import React from "react"
import MuiButton from "@material-ui/core/Button"
import { Link } from "react-router-dom"

class LinkButton extends React.PureComponent {
	render () {
		const { to, children, ...rest } = this.props

		return (
			<MuiButton component={Link} to={to} {...rest}>
				{children}
			</MuiButton>
		)
	}
}

export default LinkButton
