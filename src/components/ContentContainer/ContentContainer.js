import styled from "@emotion/styled"
import theme from "../../theme"

export default styled("div")({
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(),
    marginTop: "55px",
    marginBottom: "50px"
  }
})
