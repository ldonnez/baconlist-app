import React from "react";
import { connect } from "react-redux";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SubmitButton from "components/SubmitButton";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import TextField from "components/TextField";
import Row from "components/Row";
import Column from "components/Column";
import withValidations from "components/Hocs/Validation";

import validations from "./validations";
import { actions } from "../../../redux/listsPanel/listsPanel.actions";
import { actions as listActions } from "../../../redux/lists/lists.actions";
import {
  AddTaskButton,
  RemoveTaskButton,
  StyledExpansionPanelDetails,
  StyledExpansionPanelSummary,
  TaskField
} from "./style";

class NewListPanel extends React.PureComponent {
  handleOnCancelClick = () => {
    const { cancel } = this.props;
    cancel();
  };

  handleAddTask = () => {
    const { addFieldToKey } = this.props;
    addFieldToKey("tasks", { name: "" });
  };

  handleRemoveTask = index => {
    const { removeFieldFromKey } = this.props;
    removeFieldFromKey("tasks", index);
  };

  handleOnSaveClick = () => {
    const { data, postList } = this.props;
    postList({ data: data });
  };

  retrieveErrors = () => {
    const { validationErrors, errors } = this.props;
    return { ...validationErrors, ...errors };
  };

  render() {
    const { newList } = this.props;
    return (
      <ExpansionPanel expanded>
        <StyledExpansionPanelSummary>
          <Column>
            <TextField
              fullWidth
              id="name"
              label="Name"
              errors={this.retrieveErrors()["name"]}
              {...this.props.fieldFor("name")}
            />
          </Column>
          <Column>
            <TextField
              fullWidth
              id="dueTo"
              type="date"
              label="Due to"
              InputLabelProps={{
                shrink: true
              }}
              errors={this.retrieveErrors()["due_to"]}
              {...this.props.fieldFor("due_to")}
            />
          </Column>
        </StyledExpansionPanelSummary>
        <Divider />
        <StyledExpansionPanelDetails>
          <Row>
            <Column xs>
              <TextField
                fullWidth
                id="description"
                label="Description"
                multiline
                rows="2"
                rowsMax="4"
                variant="outlined"
                errors={this.retrieveErrors()["description"]}
                {...this.props.fieldFor("description")}
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <AddTaskButton
                onClick={this.handleAddTask}
                size="medium"
                color="primary"
                disableRipple
                disableFocusRipple
              >
                Add task
              </AddTaskButton>
            </Column>
          </Row>
          {this.props.fieldsFrom("tasks") &&
            this.props.fieldsFrom("tasks").map((task, i) => {
              return (
                <Row key={i}>
                  <Column grow={11} xs>
                    {task.map((field, j) => {
                      return (
                        <TextField
                          fullWidth
                          disableFormControl
                          key={j + i}
                          label="Name"
                          inputProps={{
                            index: i,
                            fieldindex: j
                          }}
                          {...field}
                        />
                      );
                    })}
                  </Column>
                  <Column grow={1} xs>
                    <RemoveTaskButton
                      onClick={() => this.handleRemoveTask(i)}
                    />
                  </Column>
                </Row>
              );
            })}
        </StyledExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <SubmitButton
            type="submit"
            variant="text"
            size="large"
            color="primary"
            onClick={this.handleOnSaveClick}
          >
            Save
          </SubmitButton>
          <Button
            onClick={this.handleOnCancelClick}
            size="large"
            color="primary"
          >
            Cancel
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    cancel: () => {
      dispatch(actions.cancelNew());
    },
    postList: data => {
      dispatch(listActions.post(data));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withValidations(NewListPanel, validations));
