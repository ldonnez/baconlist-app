import React, { memo } from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import NavigationLink from "../NavigationLink"

function NavigationItem ({ name, to, icon: Icon }) {
  return (
    <NavigationLink to={to}>
      <ListItem button>
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
      </ListItem>
    </NavigationLink>
  )
}

export default memo(NavigationItem)
