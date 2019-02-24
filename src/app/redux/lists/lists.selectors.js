export const getLists = state => state.lists && state.lists.data
export const getErrors = state => state.lists.errors
export const isLoading = state => state.lists.isLoading
export const getEditId = state => state.lists.editId

export const getListById = (state, id) => {
	if(getLists(state)) {
		const listById = getLists(state).filter(l => l.id === id)
		return listById && listById[0]
	}
}

export const getTasksFromList = (state, id) => {
	return getListById(id) && getListById(id).tasks
}


export const getTodoTasksFromList = (state, id) => {
	const list = getListById(state, id)
	return list && list.tasks && list.tasks.filter(t => t.completed === "false")
}

export const getCompletedTasksFromList = (state, id) => {
	const list = getListById(state, id)
	return list && list.tasks && list.tasks.filter(t => t.completed === "true")
}
