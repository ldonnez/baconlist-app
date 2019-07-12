import * as token from "app/localStorage/token"
import axios from "axios"
import { getRefreshToken, getAccessToken } from "../localStorage/token"
import { refreshToken as refresh } from "./oauth"

export function requestInterceptor (config) {
  config.headers.Authorization = `Bearer ${getAccessToken()}`
  return config
}

export function responseInterceptor (response) {
  return response
}

export function responseErrorInterceptor (error) {
  if (error && error.response && error.response.status === 401) {
    return refreshToken(error)
  }
}

function refreshToken (requestError) {
  return refresh({ refreshToken: getRefreshToken() })
    .then(newToken => {
      token.storeToken(newToken && newToken.data)
      const config = requestError.config
      config.headers.Authorization = `Bearer ${newToken.data.access_token.token}`
      return new Promise((resolve, reject) => {
        axios
          .request(config)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    })
    .catch(e => {
      return new Promise((resolve, reject) => {
        reject(e)
      })
    })
}
