import { getAccessToken } from "../localStorage/token"
import { createProtectedEventSource } from "api"

const API_URL = {
  baconlist: "https://baconlist-api.duckdns.org"
}

export const baconListProtectedEventSource = (url) => createProtectedEventSource(API_URL.baconlist, url, getAccessToken())
