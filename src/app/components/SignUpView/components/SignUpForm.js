import React from "react";
import { connect } from "react-redux";
import { actions } from "../../../redux/users/users.actions";
import Form from "components/Form";
import ActionContainer from "components/ActionContainer";
import SubmitButton from "components/SubmitButton";
import TextField from "components/TextField";
import * as selectors from "../../../redux/users/users.selectors";
import withValidations from "components/Hocs/Validation";
import validations  from "./validations";

export class SignUpForm extends React.PureComponent {

  retrieveErrors = () => {
    const { validationErrors, errors } = this.props;
    return { ...validationErrors, ...errors }
  }

  handleSubmit = e => {
    e.preventDefault();
    const { postUser, data } = this.props;
    postUser({ data: data });
  };

  render() {
    const { loading } = this.props;
    return (
      <Form method="POST" onSubmit={this.handleSubmit}>
        <TextField
          id="firstName"
          label="First Name"
          errors={this.retrieveErrors()["first_name"]}
          {...this.props.fieldFor("first_name")}
        />
        <TextField
          id="lastName"
          label="Last Name"
          errors={this.retrieveErrors()["last_name"]}
          {...this.props.fieldFor("last_name")}
        />
        <TextField
          id="email"
          label="E-mail"
          errors={this.retrieveErrors()["email"]}
          {...this.props.fieldFor("email")}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          errors={this.retrieveErrors()["password"]}
          {...this.props.fieldFor("password")}
        />
        <TextField
          id="password_confirmation"
          type="password"
          errors={this.retrieveErrors()["password_confirmation"]}
          label="Password Confirmation"
          {...this.props.fieldFor("password_confirmation")}
        />
        <ActionContainer>
          <SubmitButton loading={loading} fullWidth type="submit" variant="text" size="large" color="primary">
            Sign up
          </SubmitButton>
        </ActionContainer>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postUser: fields => {
      dispatch(actions.post(fields));
    }
  };
};

const mapStateToProps = state => {
  return {
    errors: selectors.getErrors(state),
    loading: selectors.isLoading(state)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withValidations(SignUpForm, validations));
