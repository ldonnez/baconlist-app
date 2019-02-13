import * as token from "../token"

describe("Should manage token", () => {
	it("should not set date to expired", () =>{
		const tomorrow = new Date()
		tomorrow.setDate(tomorrow.getDate() + 1)
		expect(token.isExpired(tomorrow)).toEqual(false)
	})

	it("should set date to isExpired", () =>{
		const yesterday = new Date()
		yesterday.setDate(yesterday.getDate() - 1)
		expect(token.isExpired(yesterday)).toEqual(true)
	})

	it("should not expire accessToken", () =>{
		const tomorrow = new Date()
		tomorrow.setDate(tomorrow.getDate() + 1)
		const accessToken = { exp: tomorrow.getTime()/1000}
		expect(token.isAccessTokenExpired(accessToken)).toEqual(false)
	})

	it("should expire accessToken", () =>{
		const yesterday = new Date()
		yesterday.setDate(yesterday.getDate() - 1)
		const accessToken = { exp: yesterday.getTime()/1000}
		expect(token.isAccessTokenExpired(accessToken)).toEqual(true)
	})
})
