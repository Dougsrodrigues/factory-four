import { type IStatusAPIResponse } from "../utils"
import { api } from "./api"

const getStatusApis = async (apiName: string): Promise<IStatusAPIResponse> => {
  const { data } = await api.get(`/${apiName}/health/status`)

  return data
}

export const statusService = {
  getStatusApis
}