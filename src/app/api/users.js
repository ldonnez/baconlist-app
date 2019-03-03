import { baconListApi, baconListProtectedApi } from "./api"

export const createUsers = (values) => {
  return baconListApi("/users", {
    method: "POST",
    data: values
  })
}

export const getByEmail = (data) => {
  return baconListProtectedApi.get("/users", {
    method: "GET",
    params: {
      email: data.email
    }
  })
}
