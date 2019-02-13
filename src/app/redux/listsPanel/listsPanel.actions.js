import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes(["ADD_NEW", "CANCEL_NEW"], "LISTS_PANEL")

export const actions = {
  addNew: actionCreator(types.ADD_NEW, "newList"),
  cancelNew: actionCreator(types.CANCEL_NEW)
}
