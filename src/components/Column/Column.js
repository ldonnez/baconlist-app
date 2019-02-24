import styled from "@emotion/styled"
import theme from "../../theme"

const flexBases = {
	12: "100%",
	11: "91,65%",
	10: "83,32%",
	9: "75%",
	8: "66,66%",
	7: "58,33%",
	6: "50%",
	5: "41,66%",
	4: "33.33%",
	3: "25%",
	2: "16.66%",
	1: "8.33%"
}

export default styled("div")(props => {
	return {
		padding: `${props.spacing}px`,
		[props.lg ? theme.breakpoints.up("lg") : null]: {
			flexBasis: `${props.lg ? flexBases[props.lg] : "100%"}`
		},
		[props.md ? theme.breakpoints.down("md") : null]: {
			flexBasis: `${props.md ? flexBases[props.md] : "100%"}`
		},
		[props.xs ? theme.breakpoints.down("sm") : null]: {
			flexBasis: `${props.xs ? flexBases[props.xs] : "100%"}`
		}
	}
})
