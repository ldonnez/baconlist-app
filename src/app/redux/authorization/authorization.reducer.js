import { types } from "./authorization.actions"

const initialState = {
  loading: false,
  authorized: false,
  errors: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.AUTHORIZE:
      return {
        ...state,
        loading: true
      }

    case types.AUTHORIZE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: null,
        authorized: true
      }

    case types.AUTHORIZATE_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors
      }

    case types.REFRESH_TOKEN:
      return {
        ...state,
        loading: true
      }

    case types.REFRESH_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors
      }

    case types.REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        errors: null,
        loading: false
      }

    default:
      return state
  }
}
