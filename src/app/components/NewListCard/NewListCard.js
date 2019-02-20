import React, { useState, memo } from "react"
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
import validations from "./validations"
import useValidator from "components/Hooks/validator"
import { actions as listActions } from "../../redux/lists/lists.actions"
import * as selectors from "../../redux/lists/lists.selectors"

function NewListCard({ postList, errors, loading, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    due_to: "",
    description: "",
    tasks: []
  })
  const validationErrors = useValidator(formData, errors, validations)

  const handleOnChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleOnCancel = () => {
    onClose()
  }

  const handleOnSave = event => {
    event.preventDefault()
    postList({ data: formData })
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="List">
            {formData.name && formData.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={
          <TextField
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
            errors={validationErrors && validationErrors["name"]}
          />
        }
        subheader={
          <TextField
            id="dueTo"
            type="date"
            label="Due to"
            name="due_to"
            value={formData.due_to}
            onChange={handleOnChange}
            errors={validationErrors && validationErrors["due_to"]}
            InputLabelProps={{
              shrink: true
            }}
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
              name="description"
              value={formData.description}
              onChange={handleOnChange}
              errors={validationErrors && validationErrors["description"]}
            />
          </Column>
        </Row>
      </CardContent>
      <Collapse in={true} timeout="auto" unmountOnExit>
        <CardContent>
          <Row>
            <Column>
           </Column>
          </Row>
        </CardContent>
      </Collapse>
      <Divider />
      <CardActions>
        <SubmitButton
          type="submit"
          variant="text"
          size="large"
          color="primary"
          onClick={handleOnSave}
        >
          Save
        </SubmitButton>
        <Button onClick={handleOnCancel} size="large" color="primary">
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    postList: data => {
      dispatch(listActions.post(data))
    }
  }
}

const mapStateToProps = state => {
  return {
    errors: selectors.getErrors(state),
    loading: selectors.isLoading(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(NewListCard))
