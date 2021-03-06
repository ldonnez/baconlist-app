import React, { memo } from "react"
import { StyledDrawer } from "./style"
import Divider from "@material-ui/core/Divider"
import { withStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"
import NavigationItem from "components/NavigationItem"
import Toolbar from "../Toolbar"

const styles = theme => ({
  drawerPaper: {
    width: "320px"
  }
})

function Drawer ({ classes, navigationItems }) {
  return (
    <StyledDrawer
      variant="permanent"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar />
      <Divider />
      <List component="nav">
        {navigationItems.map(({ name, to, icon }) => (
          <NavigationItem key={name} to={to} name={name} icon={icon} />
        ))}
      </List>
    </StyledDrawer>
  )
}

export default withStyles(styles)(memo(Drawer))
