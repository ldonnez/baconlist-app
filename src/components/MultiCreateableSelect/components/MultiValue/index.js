import React from "react"
import classNames from "classnames"
import Chip from "@material-ui/core/Chip"
import { withStyles } from "@material-ui/core/styles"
import CancelIcon from "@material-ui/icons/Cancel"
import { emphasize } from "@material-ui/core/styles/colorManipulator"

const styles = theme => ({
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    height: "25px"
  },
  chipFocused: {
    backgroundColor: emphasize(theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,)
  }
})

function MultiValue (props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.classes.chip, {
        [props.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  )
}

export default withStyles(styles, { withTheme: true })(MultiValue)
