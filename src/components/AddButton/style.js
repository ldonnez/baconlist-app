import styled from "@emotion/styled"
import Fab from "@material-ui/core/Fab"
import theme from "../../theme"

export const StyledFab = styled(Fab)(props => {
  return {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "68px"
    }
  }
})
