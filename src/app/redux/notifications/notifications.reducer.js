import { types } from "./notifications.actions"


const initialState = {
  notifications: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

  case types.SHOW:
    return {
      ...state,
      notifications: [ ...state.notifications, { id: action.payload.id, message: action.payload.message } ],
    }

  case types.HIDE:
    return {
      ...state,
      notifications: state.notifications.filter(n => n.id !== action.payload.id)
    }

  default:
    return state
  }
}
