import styled from "@emotion/styled"
import AppBar from "@material-ui/core/AppBar"
import theme from "../../theme"
import Toolbar from "@material-ui/core/Toolbar"

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

export const LeftToolbar= styled(Toolbar)(props => {
  return {
    justifyContent: "flex-start"
  }
})

export const CenterToolbar= styled(Toolbar)(props => {
  return {
    justifyContent: "flex-center"
  }
})

export const RightToolbar= styled(Toolbar)(props => {
  return {
    justifyContent: "flex-end"
  }
})

