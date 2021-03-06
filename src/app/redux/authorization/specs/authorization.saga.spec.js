import { authorizationFlow, refreshTokenFlow } from "../authorization.saga"
import { call, put } from "redux-saga/effects"
import * as token from "../../../localStorage/token"
import { actions } from "../authorization.actions"

describe("Should successfully authorize with valid access token", () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  let payload = { accessToken: { exp: tomorrow }, refreshToken: "token" }
  const action = actions.authorize({
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken
  })
  const gen = authorizationFlow(action)

  it("should call isAccessTokenExpired", () => {
    expect(gen.next(action).value).toEqual(call(token.isAccessTokenExpired, payload.accessToken))
  })

  it("should call authorized", () => {
    expect(gen.next().value).toEqual(put(actions.authorizeSuccess({ user: payload.accessToken })))
  })

  it("should be done", () => {
    expect(gen.next().done).toEqual(true)
  })
})

describe("Should successfully refresh token", () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  let payload = { accessToken: { exp: yesterday }, refreshToken: "token" }
  const action = actions.authorize({
    accessToken: payload.accessToken,
    refreshToken: payload.refreshToken
  })
  const gen = authorizationFlow(action)

  it("should call isAccessTokenExpired", () => {
    expect(gen.next(action).value).toEqual(call(token.isAccessTokenExpired, payload.accessToken))
  })

  it("should call refreshToken", () => {
    expect(gen.next(action).value).toEqual(call(refreshTokenFlow, action))
  })

  it("should call authorized", () => {
    expect(gen.next().value).toEqual(put(actions.authorizeSuccess({ user: payload.accessToken })))
  })

  it("should be done", () => {
    expect(gen.next().done).toEqual(true)
  })
})
