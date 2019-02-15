import React from "react"
import { connect } from "react-redux"
import { actions } from "../../../redux/authentication/authentication.actions"
import Form from "components/Form"
import ActionContainer from "components/ActionContainer"
import SubmitButton from "components/SubmitButton"
import TextField from "components/TextField"
import * as selectors from "../../../redux/authentication/authentication.selectors"
import withValidations from "components/Hocs/Validation"
import validations  from "./validations"

export class SignInForm extends React.PureComponent {

  retrieveErrors = () => {
    const { validationErrors, errors } = this.props
    return { ...validationErrors, ...errors }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { authenticate, data } = this.props
    authenticate({ data: data })
  };

  render() {
    const { loading } = this.props
    return (
      <Form method="POST" onSubmit={this.handleSubmit}>
        <TextField
          id="email"
          label="E-mail"
          errors={this.retrieveErrors()["email"]}
          {...this.props.fieldFor("email")}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          errors={this.retrieveErrors()["password"]}
          {...this.props.fieldFor("password")}
        />
        <ActionContainer>
          <SubmitButton loading={loading} type="submit" variant="text" size="large" color="primary">
            Sign In
          </SubmitButton>
        </ActionContainer>
      </Form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticate: data => {
      dispatch(actions.authenticate(data))
    }
  }
}

const mapStateToProps = state => {
  return {
    errors: selectors.errors(state),
    loading: selectors.loading(state)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withValidations(SignInForm, validations))
