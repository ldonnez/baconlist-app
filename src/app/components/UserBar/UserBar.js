import React, { useState } from "react"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ExitIcon from "@material-ui/icons/ExitToApp"

import ConfirmationDialog from "components/ConfirmationDialog"

import { getCurrentUser } from "app/redux/authorization/authorization.selectors"
import { actions } from "app/redux/authentication/authentication.actions"

function UserBar ({ currentUser, logout }) {
  const [confirmationDialog, setConfirmationDialog] = useState(false)

  const firstName = currentUser && currentUser.first_name

  const handleOnConfirmationDialog = () => {
    logout()
    setConfirmationDialog(false)
  }

  const handleOnExitClick = () => {
    setConfirmationDialog(true)
  }

  const handleOnCloseConfirmationDialog = () => {
    setConfirmationDialog(false)
  }

  const name = () => {
    if (currentUser) {
      return `${firstName}`
    }
    return ""
  }

  return (
    <React.Fragment>
      <Typography variant="button" align="center">
        {name()}
      </Typography>
      <IconButton onClick={handleOnExitClick}>
        <ExitIcon />
      </IconButton>
      { confirmationDialog && <ConfirmationDialog
        open={confirmationDialog}
        onClose={handleOnCloseConfirmationDialog}
        onConfirm={handleOnConfirmationDialog}
        text="Are you sure you want to logout?"
      /> }
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: getCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(actions.logout())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserBar)
