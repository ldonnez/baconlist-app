import { baconListApp } from "./api"

export const getVersion = () => {
  return baconListApp.get("/version")
}
