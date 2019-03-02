import React from "react"
import ClearIcon from "@material-ui/icons/Clear"
import IconButton from "@material-ui/core/IconButton"

export default class AddButton extends React.PureComponent {
  render () {
    const { onClick } = this.props
    return (
      <IconButton aria-label="Remove" onClick={onClick}>
        <ClearIcon />
      </IconButton>
    )
  }
}
