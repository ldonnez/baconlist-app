import { getFriendsFlow, postFriendsFlow, deleteFriendsFlow } from "../friends.saga"
import { call,  put } from "redux-saga/effects"
import * as api from "../../../api/friends"
import { actions } from "../friends.actions"
import { actions as friendRequestActions } from "../../friendRequests/friendRequests.actions"
import { actions as notificationActions } from "../../notifications/notifications.actions"

const GET_ACTION =  actions.get()
const POST_ACTION =  actions.post({ id: 1 })
const DELETE_ACTION =  actions.delete({ id: 1 })

describe("Should successfully GET", () => {
  const generator = getFriendsFlow(GET_ACTION)
  let next

  it("should call getFriends", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.getFriends))
  })

  it("should call getSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.getSuccess({ data: undefined })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})

describe("Should successfully POST", () => {
  const generator = postFriendsFlow(POST_ACTION)
  let next

  it("should call postFriends", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.postFriends, 1))
  })

  it("should call postSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.postSuccess()))
  })

  it("should call getFriendsRequests", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(friendRequestActions.refresh()))
  })

  it("should call getFriends", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.get()))
  })

  it("should show notification", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(notificationActions.show({ id: "postFriend", message: "Friend request accepted" })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})

describe("Should successfully DELETE", () => {
  const generator = deleteFriendsFlow(DELETE_ACTION)
  let next

  it("should call deleteFriends", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.deleteFriends, 1))
  })

  it("should call deleteSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.deleteSuccess()))
  })

  it("should call get", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.get()))
  })

  it("should show notification", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(notificationActions.show({ id: "deleteFriend", message: "Friend successfully deleted" })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})
