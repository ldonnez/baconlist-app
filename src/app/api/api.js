import { createApiInstance, createProtectedApiInstance } from "../../api"
import { getAccessToken } from "../localStorage/token"
import axios from "axios"
import { API_URL } from "./config"

export const baconListApi = createApiInstance(axios, API_URL.baconlist)
export const baconListProtectedApi = createProtectedApiInstance(axios, API_URL.baconlist, getAccessToken())
