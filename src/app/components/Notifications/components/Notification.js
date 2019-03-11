import React from "react"
import { connect } from "react-redux"
import { StyledSnackbarContent } from "./style"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import { actions } from "app/redux/notifications/notifications.actions"


function Notification ({ id, message, hide }) {

  const handleOnClose = () => {
    hide({ id: id })
  }

  return (
    <React.Fragment>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open
        autoHideDuration={5000}
        onClose={handleOnClose}
        ContentProps={{
          "aria-describedby": id,
        }}
      >
        <StyledSnackbarContent 
          message={<span id={id}>{message}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={handleOnClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    hide: id => {
      dispatch(actions.hide(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(Notification)
