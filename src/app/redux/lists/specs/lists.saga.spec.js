import { getListsFlow, postListsFlow, patchListsFlow } from "../lists.saga"
import { call,  put } from "redux-saga/effects"
import * as api from "../../../api/lists"
import { actions } from "../lists.actions"

const mockData = { name: "test" }
const GET_ACTION =  actions.get()
const POST_ACTION =  actions.post({ data: mockData })
const PATCH_ACTION =  actions.patch({ data: mockData })

describe("Should successfully GET", () => {
	const generator = getListsFlow(GET_ACTION)
  let next

	it("should call getLists", () =>{
    next = generator.next()
		expect(next.value).toMatchObject(call(api.getLists))
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
	const generator = postListsFlow(POST_ACTION)
  let next

	it("should call postLists", () =>{
    next = generator.next()
		expect(next.value).toMatchObject(call(api.postLists, mockData))
	})

	it("should call postSuccess", () =>{
    next = generator.next()
		expect(next.value).toMatchObject(put(actions.postSuccess()))
	})

	it("should call getLists", () =>{
    next = generator.next()
		expect(next.value).toMatchObject(put(actions.get()))
	})

	it("should be done", () =>{
    next = generator.next()
		expect(next.done).toEqual(true)
	})
})

describe("Should successfully PATCH", () => {
	const generator = patchListsFlow(PATCH_ACTION)
  let next

	it("should call patchLists", () =>{
    next = generator.next()
		expect(next.value).toMatchObject(call(api.patchLists, mockData))
	})

	it("should call patchSuccess", () =>{
    next = generator.next()
		expect(next.value).toMatchObject(put(actions.patchSuccess({ data: mockData })))
	})

	it("should be done", () =>{
    next = generator.next()
		expect(next.done).toEqual(true)
	})
})
