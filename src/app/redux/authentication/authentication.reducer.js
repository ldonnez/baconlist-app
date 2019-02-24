import { types } from "./authentication.actions"

const initialState = {
	loading: false,
	authenticated: false,
	errors: null
}

export default (state = initialState, action) => {
	switch (action.type) {
	case types.AUTHENTICATE:
		return {
			...state,
			loading: true
		}

	case types.AUTHENTICATE_SUCCESS:
		return {
			...state,
			loading: false,
			errors: null,
			authenticated: true
		}

	case types.AUTHENTICATE_FAIL:
		return {
			...state,
			loading: false,
			errors: action.payload.errors
		}

	default:
		return state
	}
}
