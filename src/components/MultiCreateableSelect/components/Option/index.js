import React from "react"
import MenuItem from "@material-ui/core/MenuItem"

export default function Option (props) {
  return (
    <MenuItem
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  )
}

