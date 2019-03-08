import { types } from "./users.actions"


const initialState = {
  data: null,
  isLoading: false,
  errors: null,
  success: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case types.GET_BY_EMAIL:
    return {
      ...state,
      data: null,
      isLoading: true,
    }

  case types.GET_BY_EMAIL_SUCCESS:
    return {
      ...state,
      errors: null,
      isLoading: false,
      data: action.payload.data
    }

  case types.GET_BY_EMAIL_FAIL:
    return {
      ...state,
      isLoading: false,
      errors: action.payload.errors
    }

  case types.POST:
    return {
      ...state,
      isLoading: true,
    }

  case types.POST_SUCCESS:
    return {
      ...state,
      errors: null,
      success: true,
      isLoading: false
    }

  case types.POST_FAIL:
    return {
      ...state,
      isLoading: false,
      errors: action.payload.errors
    }

  case types.CLOSE_SUCCESS_DIALOG:
    return {
      ...state,
      success: false
    }

  default:
    return state
  }
}
