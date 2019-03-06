import React, { memo } from "react"
import MuiTextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "../FormControl"

function TextField ({ name, label, value, errors, disableFormControl, ...props }){
  return disableFormControl ? (
    <React.Fragment>
      <MuiTextField
        label={label}
        id={label}
        name={name}
        value={value}
        {...props}
      />
      {errors && <FormHelperText id={label}>{errors}</FormHelperText>}
    </React.Fragment>
  ) : (
    <FormControl>
      <MuiTextField
        label={label}
        id={label}
        name={name}
        value={value}
        {...props}
      />
      {errors && <FormHelperText id={label}>{errors}</FormHelperText>}
    </FormControl>
  )
}

export default memo(TextField)
