import React, { useState, memo } from "react"
import { connect } from "react-redux"
import { actions } from "../../../redux/users/users.actions"
import Form from "components/Form"
import ActionContainer from "components/ActionContainer"
import SubmitButton from "components/SubmitButton"
import TextField from "components/TextField"
import * as selectors from "../../../redux/users/users.selectors"
import useValidator from "components/Hooks/validator"
import validations  from "./validations"

export function SignUpForm ({ postUser, errors, loading }) {
	const [formData, setFormData] = useState({ first_name: "", last_name: "", email: "", password: "", password_confirmation: "" })
	const validationErrors = useValidator(formData, errors, validations)

	const handleOnChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleOnSubmit = (event) => {
		event.preventDefault()
		postUser({ data: formData })
	}

	return (
		<Form method="POST" onSubmit={handleOnSubmit}>
			<TextField
				id="firstName"
				label="First Name"
				name="first_name"
				value={formData.first_name}
				onChange={handleOnChange}
				errors={validationErrors && validationErrors["first_name"]}
			/>
			<TextField
				id="lastName"
				label="Last Name"
				name="last_name"
				value={formData.last_name}
				onChange={handleOnChange}
				errors={validationErrors && validationErrors["last_name"]}
			/>
			<TextField
				id="email"
				label="E-mail"
				name="email"
				value={formData.email}
				onChange={handleOnChange}
				errors={validationErrors && validationErrors["email"]}
			/>
			<TextField
				id="password"
				type="password"
				label="Password"
				name="password"
				value={formData.password}
				onChange={handleOnChange}
				errors={validationErrors && validationErrors["password"]}
			/>
			<TextField
				id="password_confirmation"
				type="password"
				label="Password confirmation"
				name="password_confirmation"
				value={formData.password_confirmation}
				onChange={handleOnChange}
				errors={validationErrors && validationErrors["password_confirmation"]}
			/>
			<ActionContainer>
				<SubmitButton loading={loading} fullWidth type="submit" variant="text" size="large" color="primary">
            Sign up
				</SubmitButton>
			</ActionContainer>
		</Form>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		postUser: fields => {
			dispatch(actions.post(fields))
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
)(memo(SignUpForm))
