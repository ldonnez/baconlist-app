import { deserializedLists } from "./lists.deserializer"

export const getLists = state => {
  return state.lists && state.lists.data && deserializedLists(state.lists.data)
}
export const getErrors = state => state.lists.errors
export const isLoading = state => state.lists.isLoading
export const getEditId = state => state.lists.editId
