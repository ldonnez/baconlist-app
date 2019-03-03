export const getFriendRequests = state => {
  return state.friendRequests && state.friendRequests.data
}

export const getCount = state => {
  const friendRequests = getFriendRequests(state)
  return friendRequests && friendRequests.length
}

export const isListening = state => state.friendRequests.listening
