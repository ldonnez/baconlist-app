import React from "react"
import { connect } from "react-redux"
import SubmitButton from "components/SubmitButton"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Avatar from "@material-ui/core/Avatar"
import Collapse from "@material-ui/core/Collapse"
import TextField from "components/TextField"
import Row from "components/Row"
import Column from "components/Column"
import withValidations from "components/Hocs/Validation"

import validations from "./validations"
import { actions as listActions } from "../../redux/lists/lists.actions"
import { AddTaskButton, RemoveTaskButton } from "./style"

class NewListCard extends React.PureComponent {

  handleOnCancelClick = () => {
    const { onClose } = this.props
    onClose()
  }

  handleAddTask = () => {
    const { addFieldToKey } = this.props
    addFieldToKey("tasks", { name: "" })
  }

  handleRemoveTask = index => {
    const { removeFieldFromKey } = this.props
    removeFieldFromKey("tasks", index)
  }

  handleOnSaveClick = () => {
    const { data, postList } = this.props
    postList({ data: data })
  }

  retrieveErrors = () => {
    const { validationErrors, errors } = this.props
    return { ...validationErrors, ...errors }
  }

  render() {
    return (
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="List">
              {this.props.data &&
                this.props.data.name &&
                this.props.data.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={
            <TextField
              id="name"
              label="Name"
              errors={this.retrieveErrors()["name"]}
              {...this.props.fieldFor("name")}
            />
          }
          subheader={
            <TextField
              id="dueTo"
              type="date"
              label="Due to"
              InputLabelProps={{
                shrink: true
              }}
              errors={this.retrieveErrors()["due_to"]}
              {...this.props.fieldFor("due_to")}
            />
          }
        />
        <CardContent>
          <Column />
        </CardContent>
        <Divider />
        <CardContent>
          <Row>
            <Column xs={12} lg={12} md={12}>
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
        </CardContent>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <CardContent>
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
                        )
                      })}
                    </Column>
                    <Column grow={1} xs>
                      <RemoveTaskButton
                        onClick={() => this.handleRemoveTask(i)}
                      />
                    </Column>
                  </Row>
                )
              })}
          </CardContent>
        </Collapse>
        <Divider />
        <CardActions>
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
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postList: data => {
      dispatch(listActions.post(data))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withValidations(NewListCard, validations))
