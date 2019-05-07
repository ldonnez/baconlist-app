import { types } from "./version.actions"


const initialState = {
  data: null,
  isLoading: false,
  errors: null,
  success: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case types.UPGRADE:
    return {
      ...state,
      data: null,
      isLoading: true,
    }

  case types.UPGRADE_SUCCESS:
    return {
      ...state,
      errors: null,
      data: action.payload.data,
      isLoading: false
    }

  case types.UPGRADE_FAIL:
    return {
      ...state,
      isLoading: false,
      errors: action.payload.errors
    }

  default:
    return state
  }
}
