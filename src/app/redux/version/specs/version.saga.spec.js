import { upgradeVersionFlow, refresh } from "../version.saga"
import { call, put } from "redux-saga/effects"
import * as api from "../../../api/version"
import { actions } from "../version.actions"
import { storeVersion, getVersion } from "app/localStorage/version"

const UPGRADE_VERSION_ACTION = actions.upgrade()

describe("Should successfully UPGRADE VERSION", () => {
  const generator = upgradeVersionFlow(UPGRADE_VERSION_ACTION)
  const mockLocation = {
    reload: jest.fn()
  }
  global.location.reload = mockLocation

  let next

  it("should call getVersion", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(api.getVersion))
  })

  it("should call getVersion", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(getVersion))
  })

  it("should call storeVersion", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(storeVersion, undefined))
  })

  it("should call refresh", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(call(refresh))
  })

  it("should call storeVersion", () =>{
    next = generator.next()
    expect(next.value).toMatchObject(put(actions.upgradeSuccess({ data: undefined })))
  })

  it("should be done", () =>{
    next = generator.next()
    expect(next.done).toEqual(true)
  })
})
