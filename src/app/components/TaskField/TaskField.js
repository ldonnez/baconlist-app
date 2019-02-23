import React, { useState } from "react"
import IconButton from "@material-ui/core/IconButton"
import Input from "@material-ui/core/Input"
import InputAdornment from "@material-ui/core/InputAdornment"
import Add from "@material-ui/icons/Add"

export default function TaskField({ onAdd }) {
  const [value, setValue] = useState("")

  const handleOnChange = event => {
    setValue(event.target.value)
  }

  const handleOnAddClick = () => {
    if (value) {
      setValue("")
      onAdd(value)
    }
  }

  const handleOnEnterKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault()
      if (value) {
        setValue("")
        onAdd(value)
      }
    }
  }

  return (
    <Input
      fullWidth
      id="add-task"
      placeholder="Task"
      value={value}
      onKeyPress={handleOnEnterKeyPress}
      onChange={handleOnChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton aria-label="Add task" onClick={handleOnAddClick}>
            <Add />
          </IconButton>
        </InputAdornment>
      }
    />
  )
}
