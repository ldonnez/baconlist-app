import { baconListApi } from "./api"
import { CLIENT_ID } from "./config"

export const getToken = (values) => {
	return baconListApi("/oauth/token", {
		method: "POST",
		data: {
			grant_type: "password",
			client_id: CLIENT_ID,
			...values
		}
	})
}


export const refreshToken = (values) => {
	return baconListApi("/oauth/token", {
		method: "POST",
		data: {
			grant_type: "refresh_token",
			client_id: CLIENT_ID,
			refresh_token: values.refreshToken
		}
	})
}
