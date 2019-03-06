import React, { memo } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { NavLink } from "react-router-dom"

function NavigationItem ({ name, to, icon: Icon }) {
  return (
    <NavLink to={to}>
      <ListItem button>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
      </ListItem>
    </NavLink>
  )
}

export default memo(NavigationItem)
