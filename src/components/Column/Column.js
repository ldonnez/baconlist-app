import styled from "@emotion/styled"
import theme from "../../theme"

export default styled("div")(props => {
  return {
    padding: `${props.spacing}px`,
    flexBasis: "100",
    [theme.breakpoints.up("sm")]: {
      flex: `${props.grow ? props.grow : "1"}`
    },
    [props.xs ? theme.breakpoints.down("sm") : null]: {
      flex: `${props.grow ? props.grow : "1"}`
    }
  }
})
