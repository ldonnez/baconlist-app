import React, { memo } from "react"
import { matchPath } from "react-router-dom"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import NavigationLink from "../NavigationLink"

import { StyledListItem } from "./style"

function NavigationItem ({ name, to, icon: Icon }) {
  const isActive = () => {
    const path = window.location.pathname === "/" ? "/lists" : window.location.pathname
    return !!matchPath(path, to)
  }

  return (
    <NavigationLink to={to} >
      <StyledListItem button active={isActive()}>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
      </StyledListItem>
    </NavigationLink>
  )
}

export default memo(NavigationItem)
