import { createUsersFlow } from "../users.saga"
import { call,  put } from "redux-saga/effects"
import * as api from "../../../api/users"
import { actions } from "../users.actions"

const data = { first_name: "test", last_name: "test", email: "test@test.com", password: "test", password_confirmation: "test" }
const action =  actions.post({ data: data })

describe("Should successfully POST", () => {
  const gen = createUsersFlow(action)

  it("should call createUsers", () =>{
    expect(gen.next(action).value).toEqual(call(api.createUsers, data))
  })

  it("should call postSuccess", () =>{
    expect(gen.next().value).toEqual(put(actions.postSuccess()))
  })

  it("should be done", () =>{
    expect(gen.next().done).toEqual(true)
  })
})

describe("Should fail authentication", () => {
  const gen = createUsersFlow(action)

  it("should call createUsers", () =>{
    expect(gen.next(action).value).toEqual(call(api.createUsers, data))
  })

  it("should call postFail", () => {
    expect(gen.throw({ response: { data: "error" } }).value).toEqual(put(actions.postFail({ errors: "error" })))
  })

  it("should be done", () =>{
    expect(gen.next().done).toEqual(true)
  })
})
