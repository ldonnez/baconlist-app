import { types } from "./listsShareWith.actions"


const initialState = {
  data: null,
  isLoading: false,
  errors: null,
  meta: null,
  editId: null
}

export default (state = initialState, action) => {
  switch (action.type) {

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

  default:
    return state
  }
}
