import React from "react"
import DoneIcon from "@material-ui/icons/Done"
import { StyledChip } from "./style"

class Task extends React.PureComponent {
  render() {
    const { task } = this.props
    return (
      <StyledChip
        label={task.name}
        deleteIcon={<DoneIcon />}
        color="primary"
        variant="outlined"
      />
    )
  }
}

export default Task
