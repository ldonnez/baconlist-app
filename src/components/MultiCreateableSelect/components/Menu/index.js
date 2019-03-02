import React from "react"
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  paper: {
    position: "absolute",
    zIndex: 2,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  }
})

function Menu (props) {
  return (
    <Paper square className={props.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  )
}

export default withStyles(styles, { withTheme: true })(Menu)
