import { createApiInstance } from "api"
import { getAccessToken } from "../localStorage/token"
import axios from "axios"
import { API_URL } from "./config"

export const baconListApi = createApiInstance(axios, API_URL.baconlist)
export const baconListProtectedApi = createProtectedInstance(axios, API_URL.baconlist)

function createProtectedInstance (axios, url) {
  const instance = createApiInstance(axios, url)
  instance.interceptors.request.use(function (config){
    config.headers.Authorization = `Bearer ${getAccessToken()}`
    return config
  })
  return instance
}
