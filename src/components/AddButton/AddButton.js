import React from "react"
import AddIcon from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"

export default class AddButton extends React.PureComponent {
  render () {
    const { onClick } = this.props
    return (
      <Fab
        size="small"
        color="primary"
        aria-label="Add"
        text="secondary"
        onClick={onClick}
      >
        <AddIcon />
      </Fab>
    )
  }
}
