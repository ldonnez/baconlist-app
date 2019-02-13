import { types} from "./listsPanel.actions"


const initialState = {
	newList: null,
}

export default (state = initialState, action) => {
	switch (action.type) {

	case types.ADD_NEW:
		return {
			...state,
      newList: state.newList ? state.newList : action.payload.newList,
		}

	case types.CANCEL_NEW:
		return {
			...state,
      newList: null,
		}

	default:
		return state
	}
}
