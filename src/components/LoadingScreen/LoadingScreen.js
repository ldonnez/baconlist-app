import React from "react"
import LoadingIndicator from "../LoadingIndicator"
import CenteredContainer from "../CenteredContainer"

class LoadingScreen extends React.PureComponent {
  render () {
    return (
      <React.Fragment>
        <CenteredContainer>
          <LoadingIndicator />
        </CenteredContainer>
      </React.Fragment>
    )
  }
}

export default LoadingScreen
