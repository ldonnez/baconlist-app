import { baconListProtectedApi } from "./api"

export const getFriendRequests = () => {
  return baconListProtectedApi("/me/friend_requests", {
    method: "GET"
  })
}

export const postFriendRequests = (id) => {
  return baconListProtectedApi(`/me/friend_requests/${id}`, {
    method: "POST"
  })
}

export const deleteFriendRequests = (id) => {
  return baconListProtectedApi(`/me/friend_requests/${id}`, {
    method: "DELETE"
  })
}
