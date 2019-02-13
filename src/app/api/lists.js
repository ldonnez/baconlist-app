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
