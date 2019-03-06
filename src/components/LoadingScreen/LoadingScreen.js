import React from "react"
import LoadingIndicator from "../LoadingIndicator"
import CenteredContainer from "../CenteredContainer"

function LoadingScreen () {
  return (
    <React.Fragment>
      <CenteredContainer>
        <LoadingIndicator />
      </CenteredContainer>
    </React.Fragment>
  )
}

export default LoadingScreen
