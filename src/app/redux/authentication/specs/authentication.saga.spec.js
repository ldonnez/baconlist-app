import { authenticateFlow } from "../authentication.saga"
import { call, put } from "redux-saga/effects"
import * as api from "../../../api/oauth"
import * as token from "../../../localStorage/token"
import { actions } from "../authentication.actions"
import { push } from "connected-react-router"

describe("Should successfully authenticate", () => {
	let credentials = { email: "test@test.com", password: "test" }
	const action = actions.authenticate({ data: credentials })
	const gen = authenticateFlow(action)
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

	it("should call getToken", () => {
		expect(gen.next(action).value).toEqual(call(api.getToken, credentials))
	})

	it("should call storeToken", () => {
		expect(gen.next(response).value).toEqual(
			call(token.storeToken, response.data)
		)
	})

	it("should call authenticateSuccess", () => {
		expect(gen.next(response).value).toEqual(
			put(actions.authenticateSuccess())
		)
	})

	it("should redirect to /lists", () => {
		expect(gen.next().value).toEqual(put(push("/")))
	})

	it("should be done", () => {
		expect(gen.next().done).toEqual(true)
	})
})

describe("Should fail authentication", () => {
	let credentials = { email: "fail", password: "fail" }
	const action = actions.authenticate({ data: credentials })
	const gen = authenticateFlow(action)

	it("should call getToken", () => {
		expect(gen.next(action).value).toEqual(call(api.getToken, credentials))
	})

	it("should call authenticateFail", () => {
		expect(gen.throw("error").value).toEqual(
			put(
				actions.authenticateFail({
					errors: {
						password: "E-mail or password is incorrect",
						email: "E-mail or password is incorrect"
					}
				})
			)
		)
	})

	it("should be done", () => {
		expect(gen.next().done).toEqual(true)
	})
})
