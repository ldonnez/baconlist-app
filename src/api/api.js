export const createApiInstance = (axios, url) => {
	return axios.create({
		baseURL: url
	})
}

export const createProtectedApiInstance = (axios, url, token) => {
	return axios.create({
		baseURL: url,
		headers: { Authorization: `Bearer ${token}` }
	})
}
