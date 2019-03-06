import React, { memo } from "react"
import MuiButton from "@material-ui/core/Button"
import { Link } from "react-router-dom"

function LinkButton ({ to, children , ...rest }) {
  return (
    <MuiButton component={Link} to={to} {...rest}>
      {children}
    </MuiButton>
  )
}

export default memo(LinkButton)
