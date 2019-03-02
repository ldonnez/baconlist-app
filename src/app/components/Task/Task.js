import React from "react"
import { withStyles } from "@material-ui/core/styles"
import DoneIcon from "@material-ui/icons/Done"
import { StyledChip } from "./style"

const styles = theme => ({
  span: {
    width: "100%"
  }
})

function Task ({ name, index, onDelete, completed, created, classes }) {
  const handleOnDelete = () => {
    onDelete(index)
  }

  return (
    <StyledChip
      variant={ completed ? "default" : "outlined"}
      label={name}
      deleteIcon={completed || created ?  null : <DoneIcon color="primary"/>}
      onDelete={handleOnDelete}
      onClick={handleOnDelete}
      classes={{ label: classes.span }}
    />
  )
}

export default withStyles(styles)(Task)
