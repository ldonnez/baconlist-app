import styled from "@emotion/styled"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import theme from "../../theme"

export const StyledBottomNavigation = styled(BottomNavigation)(props => {
	return {
		position: "fixed",
		bottom: "0",
		width: "100%",
		height: "60px",
		padding: "0px",
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "block"
		}
	}
})
