import React, { useState } from "react"

import InputAdornment from "@material-ui/core/InputAdornment"
import TextField from "components/TextField"
import Search from "@material-ui/icons/Search"
import IconButton from "@material-ui/core/IconButton"

import useDelayedValue from "components/Hooks/delayedValue"
import useValidator from "components/Hooks/validator"

import validations from "./validations"


function AddFriendField ({ onChange }) {
  const [value, setValue] = useState({ email: "" })
  useDelayedValue(onChange, value, 300)
  const errors = useValidator(value, null, validations)

  const onChangeValue = event => {
    setValue({ email: event.target.value })
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Add friend by e-mail"
      name="email"
      value={value.email}
      onChange={onChangeValue}
      errors={errors && errors["email"]}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="Look up"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default AddFriendField
