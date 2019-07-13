import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./constants"

export const storeToken = (data) => {
  localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token.token)
  localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh_token.token)
}

export const removeTokens = () => {
  removeAccessToken()
  removeRefreshToken()
}

export const removeAccessToken = () => {
  return localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export const removeRefreshToken = () => {
  return localStorage.removeItem(REFRESH_TOKEN_KEY)
}

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const isAccessTokenExpired = (accessToken) => {
  const expirationDate = accessToken.exp
  return isExpired(expirationDate)
}

export const isExpired = (date) => {
  const exp = Math.floor(date)
  const today = Math.floor(Date.now() / 1000)
  return exp <= today
}

export const parseToken = (token) => {
  if (typeof token !== "string") {
    return
  }
  const base64Url = token.split(".")[1]
  const base64 = base64Url.replace("-", "+").replace("_", "/")
  return JSON.parse(window.atob(base64))
}
