import React from "react"
import { StyledLoadingContainer } from "./style"
import CircularProgress from "@material-ui/core/CircularProgress"

function LoadingIndicator () {
  return (
    <React.Fragment>
      <StyledLoadingContainer>
        <CircularProgress color="primary" />
      </StyledLoadingContainer>
    </React.Fragment>
  )
}

export default LoadingIndicator
