import styled from "@emotion/styled"
import Card from "@material-ui/core/Card"

const breakpoints = [475]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

export default styled(Card)(props => ({
	width: props.width,
	height: props.height,
	padding: props.padding,
	position: "absolute",
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	margin: "auto",
	maxWidth: "100%",
	maxHeight: "100vh",
	[mq[0]]: {
		padding: "15px",
		width: "90%",
		height: "100vh",
		paddingTop: "50px"
	}
}))
