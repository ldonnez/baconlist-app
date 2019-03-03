import { createUsersFlow, getUsersByEmailFlow } from "../users.saga"
import { call,  put } from "redux-saga/effects"
import * as api from "../../../api/users"
import { actions } from "../users.actions"

const data = { first_name: "test", last_name: "test", email: "test@test.com", password: "test", password_confirmation: "test" }
const POST_ACTION =  actions.post({ data: data })
const GET_BY_EMAIL_ACTION =  actions.getByEmail({ email: "test@test.com" })

describe("Should successfully POST", () => {
  const gen = createUsersFlow(POST_ACTION)

  it("should call createUsers", () =>{
    expect(gen.next().value).toEqual(call(api.createUsers, data))
  })

  it("should call postSuccess", () =>{
    expect(gen.next().value).toEqual(put(actions.postSuccess()))
  })

  it("should be done", () =>{
    expect(gen.next().done).toEqual(true)
  })
})

describe("Should successfully GET BY EMAIL", () => {
  const generator = getUsersByEmailFlow(GET_BY_EMAIL_ACTION)
  let next

  it("should call getLists", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.getByEmail, "test@test.com"))
  })

  it("should call getSuccess", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.getByEmailSuccess({ data: undefined })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})

describe("Should fail authentication", () => {
  const gen = createUsersFlow(POST_ACTION)

  it("should call createUsers", () =>{
    expect(gen.next().value).toEqual(call(api.createUsers, data))
  })

  it("should call postFail", () => {
    expect(gen.throw({ response: { data: "error" } }).value).toEqual(put(actions.postFail({ errors: "error" })))
  })

  it("should be done", () =>{
    expect(gen.next().done).toEqual(true)
  })
})
