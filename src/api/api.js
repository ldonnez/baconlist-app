export const createApiInstance = (axios, url) => {
  return axios.create({ baseURL: url })
}

export const createProtectedEventSource = (baseUrl, url) => {
  return new EventSource(baseUrl + url)
}
