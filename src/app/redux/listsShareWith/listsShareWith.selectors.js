import { getFriends }from "../friends/friends.selectors"

export const getListsShareWith = state => {
  return state.listsShareWith && state.listsShareWith.data
}
export const getMergedFriends = state => {
  const shareWith = getListsShareWith(state)
  const friends = getFriends(state)
  return mergeFriendsWithShareWith(friends, shareWith)
}

const mergeFriendsWithShareWith = (friends, shareWith) => {
  return friends && friends.reduce((result, friend) => {
    if(shareWith && shareWith.filter(s => s.id === friend.id).length > 0) {
      const f = { ...friend, checked: true }
      return [...result, f]
    }
    return [...result, { ...friend, checked: false }]
  },[])
}

export const getErrors = state => state.listsShareWith.errors
export const isLoading = state => state.listsShareWith.isLoading
