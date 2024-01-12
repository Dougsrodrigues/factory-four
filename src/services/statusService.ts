import { type AxiosResponse } from "axios"
import { type IServicesStatus } from "../hooks"
import { api } from "./api"

const getStatusApis = async (apiName: string): Promise<AxiosResponse<IServicesStatus>> => {
  return await api.get(`/${apiName}/health/status`)
}

export const statusService = {
  getStatusApis
}