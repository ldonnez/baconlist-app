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

export const createProtectedEventSource = (baseUrl, url, token) => {
  return new EventSource(`${baseUrl}${url}?token=${token}`)
}
