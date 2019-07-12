import { createApiInstance } from "api"
import axios from "axios"
import { API_URL } from "./config"
import { requestInterceptor, responseInterceptor, responseErrorInterceptor } from "./interceptors"

export const baconListApi = createApiInstance(axios, API_URL.baconlist)
export const baconListProtectedApi = createProtectedInstance(axios, API_URL.baconlist)

function createProtectedInstance (axios, url) {
  const instance = createApiInstance(axios, url)
  instance.interceptors.request.use(requestInterceptor)
  instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor)
  return instance
}
