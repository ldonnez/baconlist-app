import { types } from "./lists.actions"


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
      errors: null,
			isLoading: false
		}

	case types.POST_FAIL:
		return {
			...state,
			isLoading: false,
			errors: action.payload.errors
		}

	case types.GET:
		return {
			...state,
			isLoading: true,
		}

	case types.GET_SUCCESS:
		return {
			...state,
			isLoading: false,
      data: action.payload.data
		}

	case types.GET_FAIL:
		return {
			...state,
			isLoading: false,
			errors: action.payload.errors
		}

	case types.PATCH:
		return {
			...state,
			isLoading: true,
		}

	case types.PATCH_SUCCESS:
		return {
			...state,
      data: updateList(state.data, action.payload.data),
			isLoading: false
		}

	case types.PATCH_FAIL:
		return {
			...state,
			isLoading: false,
			errors: action.payload.errors
		}

	default:
		return state
	}
}

function updateList(lists, updatedList) {
  return lists.map((list, index) => {
    if (list.id!== updatedList.id) {
      return list
    }

    return {
      ...list,
      ...updatedList
    }
  })
}
