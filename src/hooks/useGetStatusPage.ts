import { useEffect, useState } from "react";
import { statusService } from "../services/statusService";
import { type IStatusAPIResponse } from "../utils";

export interface IServicesStatus extends IStatusAPIResponse {
  status: number;
  apiName: string;
}
const apiNames = [
  'accounts',
  'assets',
  'customers',
  'datapoints',
  'devices',
  'documents',
  'forms',
  'invites',
  'media',
  'messages',
  'namespaces',
  'orders',
  'patients',
  'relationships',
  'rules',
  'templates',
  'users',
  'workflows'
];

export const useGetStatusPage = () => {
  const [servicesStatus, setServicesStatus] = useState([] as IServicesStatus[])
  const [isLoadingRequest, setIsLoadingRequest] = useState(false)

  useEffect(() => {
    const fetchApiStatus = async () => {
      const responsesApi = [] as IServicesStatus[]
      setIsLoadingRequest(true)
      for (const apiName of apiNames) {
        try {
          const { data, status } = await statusService.getStatusApis(apiName);
          responsesApi.push({
            ...data,
            apiName,
            status
          });
        } catch (error: any) {
          responsesApi.push({
            apiName,
            hostname: error.name,
            message: error.message,
            timeo: error.config.timeout,
            status: error.code,
            success: false
          });
        }
      }
      setIsLoadingRequest(false)
      setServicesStatus(responsesApi)
    };

    void fetchApiStatus();

    const intervalId = setInterval(fetchApiStatus, 15000);

    return () => { clearInterval(intervalId); };
  }, [])


  const isRefetching = isLoadingRequest && servicesStatus.length > 0
  const isLoading = !isRefetching && isLoadingRequest

  return { servicesStatus, isLoading, isRefetching }
}