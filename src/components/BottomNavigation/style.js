import styled from "@emotion/styled"
import BottomNavigation from "@material-ui/core/BottomNavigation"
import theme from "../../theme"

export const StyledBottomNavigation = styled(BottomNavigation)(props => {
  return {
    position: "fixed",
    bottom: "0",
    width: "100%",
    textAlign: "center",
    padding: "0px",
    display: "none",
    boxShadow: "0px 1px 3px 0px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 2px 1px -1px rgba(0,0,0,0.12)",
    [theme.breakpoints.down("sm")]: {
      display: "block"

    }
  }
})
