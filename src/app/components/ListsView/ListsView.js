import React from "react"
import Row from "components/Row"
import Column from "components/Column"
import Lists from "../Lists"
import Popover from "@material-ui/core/Popover"
import Fab from "@material-ui/core/Fab"
import NewListCard from "../NewListCard"
import AddIcon from "@material-ui/icons/Add"

class ListsView extends React.PureComponent {
  state = {
    anchorEl: null
  };

  handleToggle = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  };

  render () {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <React.Fragment>
        <Row>
          <Column spacing={4}>
            <Fab
              color="primary"
              aria-owns={open ? "new-list-card-popper" : undefined}
              aria-haspopup="true"
              onClick={this.handleToggle}
            >
              <AddIcon />
            </Fab>
          </Column>
        </Row>
        <Popover
          id="new-list-card-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <NewListCard onClose={this.handleClose}/>
        </Popover>
        <Lists />
      </React.Fragment>
    )
  }
}

export default ListsView
