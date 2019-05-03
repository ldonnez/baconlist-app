import React from "react"
import MuiButton from "@material-ui/core/Button"

function SubmitButton ({ children, disabled, ...rest }) {
  return (
    <React.Fragment>
      <MuiButton type="submit" {...rest}>
        {children}
      </MuiButton>
    </React.Fragment>
  )
}

export default SubmitButton
