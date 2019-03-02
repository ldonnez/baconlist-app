const getClientId = () => {
  return process.env.REACT_APP_CLIENT_ID
}

export const CLIENT_ID = getClientId()

export const API_URL = {
  baconlist: "https://baconlist-api.duckdns.org"
}
