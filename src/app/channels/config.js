import { getAccessToken } from "../localStorage/token"
import { createProtectedEventSource } from "api"

const API_URL = {
  baconlist: "https://baconlist-api.duckdns.org"
}

export const baconListProtectedEventSource = (url) => createProtecedEventSourceInstance(url)

function createProtecedEventSourceInstance (url) {
  const protectedUrl = `${url}?token=${getAccessToken()}`
  return createProtectedEventSource(API_URL.baconlist, protectedUrl)
}
