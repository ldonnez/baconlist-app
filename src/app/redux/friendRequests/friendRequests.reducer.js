import { types } from "./friendRequests.actions"


const initialState = {
  data: [],
  isLoading: false,
  errors: null,
  listening: false,
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

  case types.START_LISTENING:
    return {
      ...state,
      listening: true,
    }

  case types.STOP_LISTENING:
    return {
      ...state,
      listening: false,
    }

  case types.GET:
    return {
      ...state,
      isLoading: true,
    }

  case types.GET_SUCCESS:
    if (state.data.length !== action.payload.data.length) {
      return {
        ...state,
        data: action.payload.data
      }
    }
    return state
  case types.REFRESH:
    return {
      ...state,
      isLoading: true,
    }

  case types.REFRESH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.payload.data
    }

  case types.REFRESH_FAIL:
    return {
      ...state,
      isLoading: false,
      errors: action.payload.errors
    }
  case types.GET_FAIL:
    return {
      ...state,
      isLoading: false,
      errors: action.payload.errors
    }

  case types.DELETE:
    return {
      ...state,
      isLoading: true,
    }

  case types.DELETE_SUCCESS:
    return {
      ...state,
      isLoading: false
    }

  case types.DELETE_FAIL:
    return {
      ...state,
      isLoading: false,
      errors: action.payload.errors
    }

  default:
    return state
  }
}
