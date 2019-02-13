import React from "react"
import { StyledLoadingContainer } from "./style"
import CircularProgress from "@material-ui/core/CircularProgress"

class LoadingIndicator extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<StyledLoadingContainer>
					<CircularProgress color="primary" />
				</StyledLoadingContainer>
			</React.Fragment>
		)
	}
}

export default LoadingIndicator
