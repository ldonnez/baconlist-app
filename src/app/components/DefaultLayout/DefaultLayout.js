import React, { useEffect, memo } from "react"
import Drawer from "components/Drawer"
import AppBar from "components/AppBar"
import BottomNavigation from "components/BottomNavigation"
import ContentContainer from "components/ContentContainer"
import ApplicationContainer from "components/ApplicationContainer"
import LoadingScreen from "components/LoadingScreen"
import Toolbar from "components/Toolbar"
import Notifications from "../Notifications"
import UserBar from "../UserBar"
import { Route } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import navigationItems from "../../navigationItems"

import { connect } from "react-redux"
import { actions } from "../../redux/authorization/authorization.actions"
import { actions as friendRequestActions } from "../../redux/friendRequests/friendRequests.actions"
import * as selectors from "../../redux/authorization/authorization.selectors"
import * as friendRequestsSelectors from "../../redux/friendRequests/friendRequests.selectors"
import * as token from "../../localStorage/token"

export function Layout ( { children, component: Component, isListening, authorized, loading, startListening, authorize, ...rest } ){

  useEffect(() => {
    const accessToken = token.parseToken(token.getAccessToken())
    const storedRefreshToken = token.getRefreshToken()
    authorize({ accessToken: accessToken, refreshToken: storedRefreshToken })
  }, [authorize])

  useEffect(() => {
    if (!isListening && authorized) {
      startListening()
    }
  },[isListening, authorized, startListening])

  return (
    <Route
      {...rest}
      render={ matchProps => (
        <ApplicationContainer>
          <CssBaseline />
          <AppBar rightComponent={<UserBar />}/>
          <Drawer navigationItems={navigationItems} />
          <ContentContainer>
            <Toolbar />
            { !loading ? (
              <Component {...matchProps} />
            ) : (
              <LoadingScreen />
            )
            }
          </ContentContainer>
          <Notifications />
          <BottomNavigation navigationItems={navigationItems} />
        </ApplicationContainer>
      )}
    />
  )
}

const mapStateToProps = state => {
  return {
    authorized: selectors.authorized(state),
    loading: selectors.loading(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Layout))
