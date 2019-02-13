import { baconListApi } from "./api"

export const createUsers = (values) => {
	return baconListApi("/users", {
		method: "POST",
		data: values
	})
}
