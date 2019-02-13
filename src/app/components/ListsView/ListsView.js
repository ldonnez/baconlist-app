import React from "react";
import { connect } from "react-redux";
import Row from "components/Row";
import Column from "components/Column";
import Lists from "../Lists";
import Button from "@material-ui/core/Button";
import { actions } from "../../redux/listsPanel/listsPanel.actions";

class ListsView extends React.PureComponent {
  handleOnAdd = () => {
    const { addNewList } = this.props;
    addNewList({ newList: { name: "", description: "" } });
  };

  render() {
    return (
      <React.Fragment>
        <Row>
          <Column spacing={4}>
            <Button
              size="medium"
              variant="contained"
              color="primary"
              onClick={this.handleOnAdd}
            >
              Add
            </Button>
          </Column>
        </Row>
        <Row>
          <Column spacing={4}>
            <Lists />
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewList: newList => {
      dispatch(actions.addNew(newList));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ListsView);
