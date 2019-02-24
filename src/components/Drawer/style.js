import styled from "@emotion/styled"
import Drawer from "@material-ui/core/Drawer"
import theme from "../../theme"

export const StyledDrawer = styled(Drawer)(props => {
	return {
		width: "320px",
		flexShrink: 0,
		[theme.breakpoints.down("sm")]: {
			display: "none"
		}
	}
})
