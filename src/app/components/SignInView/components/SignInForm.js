import React, { useState, memo } from "react"
import { connect } from "react-redux"
import { actions } from "../../../redux/authentication/authentication.actions"
import Form from "components/Form"
import ActionContainer from "components/ActionContainer"
import SubmitButton from "components/SubmitButton"
import TextField from "components/TextField"
import * as selectors from "../../../redux/authentication/authentication.selectors"
import validations  from "./validations"
import useValidator from "components/Hooks/validator"

export function SignInForm ({ authenticate, errors, loading }) {
	const [formData, setFormData] = useState({ email: "", password: "" })
	const validationErrors = useValidator(formData, errors, validations)

	const handleOnChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleOnSubmit = (event) => {
		event.preventDefault()
		authenticate({ data: formData })
	}

	return (
		<Form method="POST" onSubmit={handleOnSubmit}>
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
				label="Password"
				type="password"
				name="password"
				value={formData.password}
				onChange={handleOnChange}
				errors={validationErrors && validationErrors["password"]}
			/>
			<ActionContainer>
				<SubmitButton loading={loading} type="submit" variant="text" size="large" color="primary">
            Sign In
				</SubmitButton>
			</ActionContainer>
		</Form>
	)
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
)(memo(SignInForm))
