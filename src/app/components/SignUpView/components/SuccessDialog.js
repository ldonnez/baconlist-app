import React from "react"
import { connect } from "react-redux"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { withRouter } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { actions } from "../../../redux/users/users.actions"
import * as selectors from "../../../redux/users/users.selectors"

function SuccessDialog ({ success, close, history }) {
  const onLogin = () => {
    history.push("/signin")
  }

  return (
    <Dialog
      open={success}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Thank you!</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          A confirmation mail has been send to you!<br/>
          Please complete your registration by clicking the confirmation link
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Close
        </Button>
        <Button onClick={onLogin} color="primary" autoFocus>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => {
  return {
    success: selectors.isSuccess(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    close: () => {
      dispatch(actions.closeSuccessDialog())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SuccessDialog))
