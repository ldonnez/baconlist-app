import React from "react"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  noOptionsMessage: {
    padding: `${theme.spacing()}px ${theme.spacing(2)}px`
  }
})

function NoOptionsMessage (props) {
  return (
    <Typography
      color="textSecondary"
      className={props.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  )
}

export default withStyles(styles, { withTheme: true })(NoOptionsMessage)
