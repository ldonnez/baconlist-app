import styled from "@emotion/styled"
import theme from "../../theme"

export default styled("div")({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing.unit * 2,
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing.unit,
    marginTop: "55px"
  }
})
