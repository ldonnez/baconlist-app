import { authorizationFlow } from "../authorization.saga"
import { call, put } from "redux-saga/effects"
import * as api from "../../../api/oauth"
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
		expect(gen.next(action).value).toEqual(
			call(token.isAccessTokenExpired, payload.accessToken)
		)
	})

	it("should call authorized", () => {
		expect(gen.next().value).toEqual(put(actions.authorizeSuccess()))
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

	const response = {
		data: {
			access_token: {
				token: "test"
			},
			refresh_token: {
				token: "test"
			}
		}
	}

	it("should call isAccessTokenExpired", () => {
		expect(gen.next(action).value).toEqual(
			call(token.isAccessTokenExpired, payload.accessToken)
		)
	})

	it("should call refreshToken", () => {
		expect(gen.next(action).value).toEqual(call(api.refreshToken, payload))
	})

	it("should call storeToken", () => {
		expect(gen.next(response).value).toEqual(
			call(token.storeToken, response.data)
		)
	})

	it("should call refreshTokenSuccess", () => {
		expect(gen.next().value).toEqual(put(actions.refreshTokenSuccess()))
	})

	it("should call authorized", () => {
		expect(gen.next().value).toEqual(put(actions.authorizeSuccess()))
	})

	it("should be done", () => {
		expect(gen.next().done).toEqual(true)
	})
})
