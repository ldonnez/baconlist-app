import React, { useEffect, memo } from "react"
import { connect } from "react-redux"
import { actions } from "../../redux/authorization/authorization.actions"
import { actions as friendRequestActions } from "../../redux/friendRequests/friendRequests.actions"
import * as selectors from "../../redux/authorization/authorization.selectors"
import * as friendRequestsSelectors from "../../redux/friendRequests/friendRequests.selectors"
import * as token from "../../localStorage/token"

function withAuthorization (WrappedComponent) {
  function Authorization ({ startListening, isListening, authorized, authorize }) {
    useEffect(() => {
      if (!isListening && authorized) {
        startListening()
      }
    },[isListening, startListening, authorized])

    useEffect(() => {
      const accessToken = token.parseToken(token.getAccessToken())
      const refreshToken = token.getRefreshToken()
      authorize({ accessToken: accessToken, refreshToken: refreshToken })
    }, [])
    return <WrappedComponent />
  }

  const mapStateToProps = state => {
    return {
      authorized: selectors.authorized(state),
      isListening: friendRequestsSelectors.isListening(state)
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      authorize: data =>
        dispatch(actions.authorize({
          accessToken: data.accessToken,
          refreshToken: data.refreshToken
        })),
      startListening: () => dispatch(friendRequestActions.startListening())
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(memo(Authorization))
}

export default withAuthorization
