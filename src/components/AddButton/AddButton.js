import React from "react"
import AddIcon from "@material-ui/icons/Add"
import { StyledFab } from "./style"

export default function AddButton ({ onClick }) {
  return (
    <StyledFab
      color="primary"
      aria-label="Add"
      onClick={onClick}
    >
      <AddIcon />
    </StyledFab>
  )
}
