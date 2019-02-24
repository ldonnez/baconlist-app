import { baconListProtectedApi } from "./api"
import { serializedList } from "./serializers/lists.serializer"

export const getLists = () => {
	return baconListProtectedApi("/me/lists", {
		method: "GET"
	})
}

export const postLists = (values) => {
	return baconListProtectedApi("/me/lists", {
		method: "POST",
		data: serializedList(values)
	})
}

export const patchLists = (values) => {
	return baconListProtectedApi(`/lists/${values.id}`, {
		method: "PATCH",
		data: serializedList(values)
	})
}

export const deleteLists = (id) => {
	return baconListProtectedApi(`/me/lists/${id}`, {
		method: "DELETE"
	})
}
