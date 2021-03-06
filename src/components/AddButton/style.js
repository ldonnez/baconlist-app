import styled from "@emotion/styled"
import Fab from "@material-ui/core/Fab"
import theme from "../../theme"

export const StyledFab = styled(Fab)(props => {
  return {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(),
    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px",
      zIndex: "3000",
    }
  }
})
