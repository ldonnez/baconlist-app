import { types} from "./users.actions"


const initialState = {
	data: null,
	isLoading: false,
	errors: null,
	meta: null
}

export default (state = initialState, action) => {
	switch (action.type) {
	case types.POST:
		return {
			...state,
			isLoading: true,
		}

	case types.POST_SUCCESS:
		return {
			...state,
			isLoading: false
		}

	case types.POST_FAIL:
		return {
			...state,
			isLoading: false,
			errors: action.payload.errors
		}

	default:
		return state
	}
}
