import { types } from "./authorization.actions"

const initialState = {
  loading: false,
  authorized: false,
  user: null,
  errors: null
}

export default (state = initialState, action) => {
  switch (action.type) {
  case types.AUTHORIZE:
    return {
      ...state,
      authorized: false,
      loading: true
    }

  case types.AUTHORIZE_SUCCESS:
    return {
      ...state,
      loading: false,
      errors: null,
      authorized: true,
      user: action.payload.user
    }

  case types.AUTHORIZATE_FAIL:
    return {
      ...state,
      loading: false,
      authorized: false,
      errors: action.payload.errors
    }

  case types.REFRESH_TOKEN:
    return {
      ...state,
      authorized: false,
      loading: true
    }

  case types.REFRESH_TOKEN_FAIL:
    return {
      ...state,
      loading: false,
      authorized: false,
      errors: action.payload.errors
    }

  case types.REFRESH_TOKEN_SUCCESS:
    return {
      ...state,
      errors: null,
      authorized: true,
      loading: false
    }

  default:
    return state
  }
}
