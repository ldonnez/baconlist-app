import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
	valueContainer: {
		display: "flex",
		flexWrap: "wrap",
		flex: 1,
		alignItems: "center",
		overflow: "hidden",
	}
})

function ValueContainer (props) {
	return <div className={props.classes.valueContainer}>{props.children}</div>
}

export default withStyles(styles, { withTheme: true })(ValueContainer)
