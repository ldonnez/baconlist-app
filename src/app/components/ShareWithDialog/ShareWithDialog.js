import React, { useEffect, useState, memo } from "react"
import { connect } from "react-redux"
import Button from "@material-ui/core/Button"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogActions from "@material-ui/core/DialogActions"
import Dialog from "@material-ui/core/Dialog"
import FormGroup from "@material-ui/core/FormGroup"
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import * as selectors from "../../redux/listsShareWith/listsShareWith.selectors"

function ShareWithDialog ( { open, onClose, onSave, listId, friends } ) {
  const [shareWithFriends, setShareWithFriends] = useState([])

  useEffect(() => {
    setShareWithFriends(friends)
  }, [friends])

  const handleCancel = () => {
    onClose()
  }

  const handleSave= () => {
    onSave(shareWithFriends.filter(f => f.checked).map(f => f.id))
    onClose()
  }

  const handleCheckBoxChange = id => event => {
    const newShareWith = shareWithFriends.map((friend) => {
      if (friend.id !== id) {
        return friend
      }

      return {
        ...friend,
        checked: event.target.checked
      }
    })
    setShareWithFriends(newShareWith)
  }

  return (
    <Dialog
      disableBackdropClick
      open={open}
      disableEscapeKeyDown
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
    >
      <DialogTitle id="confirmation-dialog-title">Share with</DialogTitle>
      <DialogContent>
        <FormGroup>
          { shareWithFriends && shareWithFriends.map(f => {
            return (
              <FormControlLabel
                key={f.id}
                control={
                  <Checkbox
                    color="primary"
                    checked={f.checked}
                    onChange={handleCheckBoxChange(f.id)}
                    value={f.id}
                  />
                }
                label={`${f.first_name} ${f.last_name}`}
              />
            )
          }) }
        </FormGroup>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave} color="primary">
            Save
        </Button>
        <Button onClick={handleCancel} color="primary">
            Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => {
  return {
    friends: selectors.getMergedFriends(state)
  }
}

export default connect(mapStateToProps, null)(memo(ShareWithDialog))
