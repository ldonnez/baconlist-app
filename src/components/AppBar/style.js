import styled from "@emotion/styled"
import AppBar from "@material-ui/core/AppBar"
import theme from "../../theme"

export const StyledAppBar = styled(AppBar)(props => {
  return {
    width: "calc(100% - 320px)",
    marginLeft: "320px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: "0"
    }
  }
})
