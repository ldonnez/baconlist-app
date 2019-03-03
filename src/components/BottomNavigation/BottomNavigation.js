import React from "react"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import { NavLink } from "react-router-dom"
import { StyledBottomNavigation } from "./style"

export default class BottomNavigation extends React.Component {
  state = {
  	value: 0
  };

  handleChange = (event, value) => {
  	this.setState({ value })
  };

  render () {
  	const { value } = this.state
  	const { navigationItems } = this.props
  	return (
  		<StyledBottomNavigation value={value} onChange={this.handleChange}>
  			{navigationItems &&
          navigationItems.map(({ name, to, icon: Icon }) => (
            <NavLink key={name} to={to}><BottomNavigationAction key={name} icon={<Icon />} /></NavLink>
          ))}
  		</StyledBottomNavigation>
  	)
  }
}
