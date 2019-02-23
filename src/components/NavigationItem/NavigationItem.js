import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { NavLink } from "react-router-dom"

class NavigationItem extends React.PureComponent {
  render () {
    const { name, to, icon: Icon } = this.props

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
}

export default NavigationItem
