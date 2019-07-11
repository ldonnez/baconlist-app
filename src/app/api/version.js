import { baconListApi } from "./api"

export const getVersion = () => {
  return baconListApi.get("/version")
}
