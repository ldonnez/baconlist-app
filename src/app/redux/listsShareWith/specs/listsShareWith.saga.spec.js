import { getListsShareWithFlow } from "../listsShareWith.saga"
import { call,  put } from "redux-saga/effects"
import * as api from "../../../api/lists"
import { actions } from "../listsShareWith.actions"

const GET_ACTION =  actions.get({ id: 1 })

describe("Should successfully GET", () => {
  const generator = getListsShareWithFlow(GET_ACTION)
  let next

  it("should call getLists", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.getListsShareWith, 1))
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
