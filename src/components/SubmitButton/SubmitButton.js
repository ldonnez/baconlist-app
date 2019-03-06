import React from "react"
import MuiButton from "@material-ui/core/Button"
import { CircularProgress } from "./style"

function SubmitButton ({ loading, children, disabled, ...rest }) {
  return (
    <React.Fragment>
      <MuiButton disabled={disabled ? disabled : loading} type="submit" {...rest}>
        {children}
      </MuiButton>
      {loading && <CircularProgress size={24} />}
    </React.Fragment>
  )
}

export default SubmitButton
