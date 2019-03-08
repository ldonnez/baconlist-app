import React, { useState, memo } from "react"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { NavLink } from "react-router-dom"
import { StyledBottomNavigation } from "./style"

function BottomNavigation ( { navigationItems } ){
  const [value, setValue] = useState(0)

  const handleChange = (event, value) => {
    setValue({ value })
  }

  return (
    <StyledBottomNavigation value={value} onChange={handleChange}>
      {navigationItems &&
          navigationItems.map(({ name, to, icon: Icon }) => (
            <NavLink key={name} to={to}><BottomNavigationAction key={name} icon={<Icon />} /></NavLink>
          ))}
    </StyledBottomNavigation>
  )
}

export default memo(BottomNavigation)
