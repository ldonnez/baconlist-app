import { VERSION_KEY } from "./constants"

export const storeVersion = (version) => {
  localStorage.setItem(VERSION_KEY, version)
}

export const getVersion = () => {
  return localStorage.getItem(VERSION_KEY)
}
