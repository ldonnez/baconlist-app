import React from "react"
import TextField from "@material-ui/core/TextField"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	input: {
		display: "flex",
		padding: 0,
	}
})

function inputComponent ({ ...props }) {
	return <div {...props} />
}

function Control (props) {
	return (
		<TextField
			fullWidth
			InputProps={{
 				inputComponent,
				inputProps: {
					className: props.classes.input,
					children: props.children,
					...props.innerProps,
				},
			}}
			{...props.selectProps.textFieldProps}
		/>
	)
}

export default withStyles(styles, { withTheme: true })(Control)
