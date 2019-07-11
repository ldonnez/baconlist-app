import styled from "@emotion/styled"
import { NavLink } from "react-router-dom"
import theme from "theme"

export const StyledNavLink = styled(NavLink)(props => {
  return {
    textDecoration: "none",
    color: theme.palette.common.black
  }
})
