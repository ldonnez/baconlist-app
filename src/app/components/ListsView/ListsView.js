import React from "react"
import { connect } from "react-redux"
import Row from "components/Row"
import Column from "components/Column"
import Lists from "../Lists"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { actions } from "../../redux/listsPanel/listsPanel.actions"

class ListsView extends React.PureComponent {
  handleOnAdd = () => {
    const { addNewList } = this.props
    addNewList({ newList: { name: "", description: "" } })
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Column spacing={4}>
            <Fab onClick={this.handleOnAdd} color="primary" aria-label="Add">
              <AddIcon />
            </Fab>
          </Column>
        </Row>
        <Lists />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewList: newList => {
      dispatch(actions.addNew(newList))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ListsView)
