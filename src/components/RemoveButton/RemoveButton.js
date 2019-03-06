import React from "react"
import ClearIcon from "@material-ui/icons/Clear"
import IconButton from "@material-ui/core/IconButton"

export function ddButton ({ onClick }){
  return (
    <IconButton aria-label="Remove" onClick={onClick}>
      <ClearIcon />
    </IconButton>
  )
}
