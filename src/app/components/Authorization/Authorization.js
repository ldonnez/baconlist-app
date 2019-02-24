import React from "react"
import { connect } from "react-redux"
import { actions } from "../../redux/authorization/authorization.actions"
import * as selectors from "../../redux/authorization/authorization.selectors"
import * as token from "../../localStorage/token"

const withAuthorization = WrappedComponent => {
	class Authorization extends React.Component {
		componentDidMount () {
			const { authorize } = this.props
			const accessToken = token.parseToken(token.getAccessToken())
			const refreshToken = token.getRefreshToken()
			authorize({ accessToken: accessToken, refreshToken: refreshToken })
		}

		render () {
			return <WrappedComponent {...this.props} />
		}
	}

	const mapStateToProps = state => {
		return { authorized: selectors.authorized(state) }
	}

	const mapDispatchToProps = dispatch => {
		return {
			authorize: data =>
				dispatch(
					actions.authorize({
						accessToken: data.accessToken,
						refreshToken: data.refreshToken
					})
				)
		}
	}

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(Authorization)
}

export default withAuthorization
