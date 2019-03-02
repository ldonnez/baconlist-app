import React from "react"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"

function ActionMenu ({ open, anchor, placement, onClose, children }) {
  return (
    <Popper open={open} anchorEl={anchor} placement={placement} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id="menu-list-grow"
        >
          <Paper>
            <ClickAwayListener onClickAway={onClose}>
              { children }
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}

export default ActionMenu
