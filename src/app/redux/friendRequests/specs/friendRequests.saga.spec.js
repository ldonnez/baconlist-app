import { postFriendRequestsFlow, deleteFriendRequestsFlow, refreshFriendRequestsFlow } from "../friendRequests.saga"
import { call,  put } from "redux-saga/effects"
import * as api from "../../../api/friendRequests"
import { actions } from "../friendRequests.actions"
import { actions as notificationActions } from "../../notifications/notifications.actions"

const REFRESH_ACTION =  actions.refresh()
const POST_ACTION =  actions.post({ id: 1 })
const DELETE_ACTION =  actions.delete({ id: 1 })

describe("Should successfully REFRESH", () => {
  const generator = refreshFriendRequestsFlow(REFRESH_ACTION)
  let next

  it("should call stopListening", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.stopListening()))
  })

  it("should call getFriendRequests", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.getFriendRequests))
  })

  it("should call getSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.refreshSuccess({ data: undefined })))
  })

  it("should call startListening", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.startListening()))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})

describe("Should successfully POST", () => {
  const generator = postFriendRequestsFlow(POST_ACTION)
  let next

  it("should call postFriendRequests", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.postFriendRequests, 1))
  })

  it("should call postSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.postSuccess()))
  })

  it("should show notification", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(notificationActions.show({ id: "postFriendRequest", message: "Friend request has been send" })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})

describe("Should successfully DELETE", () => {
  const generator = deleteFriendRequestsFlow(DELETE_ACTION)
  let next

  it("should call deleteFriendRequests", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.deleteFriendRequests, 1))
  })

  it("should call deleteSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.deleteSuccess()))
  })

  it("should call get", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.refresh()))
  })

  it("should show notification", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(notificationActions.show({ id: "deleteFriendRequest", message: "Friend request has been ignored" })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})
