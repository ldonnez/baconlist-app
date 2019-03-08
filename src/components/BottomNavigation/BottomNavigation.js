import React, { useState, memo } from "react"
import { withRouter } from "react-router-dom"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { StyledBottomNavigation } from "./style"

function BottomNavigation ( { navigationItems, history } ){
  const [value] = useState(window.location.pathname === "/" ? "/lists" : window.location.pathname)

  const handleChange = (event, value) => {
    history.push(value)
  }

  return (
    <StyledBottomNavigation value={value} onChange={handleChange}>
      {navigationItems && navigationItems.map(({ name, to, icon: Icon }) => (
        <BottomNavigationAction label={name} value={to} key={name} icon={<Icon />} />
      ))}
    </StyledBottomNavigation>
  )
}

export default withRouter(memo(BottomNavigation))
