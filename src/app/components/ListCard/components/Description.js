import React from "react"
import { StyledTypography } from "./style"

function Description ({ children }) {
  return (
    <StyledTypography paragraph >
      {children}
    </StyledTypography>
  )
}

export default Description
