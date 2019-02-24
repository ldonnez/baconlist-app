import styled from "@emotion/styled"
import theme from "../../theme"

export default styled("div")({
	...theme.mixins.toolbar,
	[theme.breakpoints.down("sm")]: {
		display: "none"
	}
})
