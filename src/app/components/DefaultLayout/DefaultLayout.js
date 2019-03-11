import React, { memo } from "react"
import Drawer from "components/Drawer"
import AppBar from "components/AppBar"
import BottomNavigation from "components/BottomNavigation"
import ContentContainer from "components/ContentContainer"
import ApplicationContainer from "components/ApplicationContainer"
import Toolbar from "components/Toolbar"
import Notifications from "../Notifications"
import { Route } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import navigationItems from "../../navigationItems"

export function Layout ( { children, component: Component, ...rest } ){
  return (
    <Route
      {...rest}
      render={matchProps => (
        <ApplicationContainer>
          <CssBaseline />
          <AppBar />
          <Drawer navigationItems={navigationItems} />
          <ContentContainer>
            <Toolbar />
            <Component {...matchProps} />
          </ContentContainer>
          <Notifications />
          <BottomNavigation navigationItems={navigationItems} />
        </ApplicationContainer>
      )}
    />
  )
}

export default memo(Layout)
