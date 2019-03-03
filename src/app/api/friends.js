import { baconListProtectedApi } from "./api"

export const getFriends = () => {
  return baconListProtectedApi("/me/friends", {
    method: "GET"
  })
}

export const postFriends = (id) => {
  return baconListProtectedApi(`/me/friends/${id}`, {
    method: "POST"
  })
}

export const deleteFriends = (id) => {
  return baconListProtectedApi(`/me/friends/${id}`, {
    method: "DELETE"
  })
}
