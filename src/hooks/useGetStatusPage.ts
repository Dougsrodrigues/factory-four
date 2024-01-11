import { useEffect, useState } from "react";
import { statusService } from "../services/statusService";
import { type IStatusAPIResponse } from "../utils";

interface IResponses extends IStatusAPIResponse {
  status: number;
  apiName: string;
}

export const useGetStatusPage = () => {
  const [responses, setResponses] = useState([] as IResponses[])
  const [isLoading, setIsLoading] = useState(false)

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

  useEffect(() => {
    const fetchApiStatus = async () => {
      const responsesApi = [] as IResponses[]
      setIsLoading(true)
      for (const apiName of apiNames) {
        try {
          const response = await statusService.getStatusApis(apiName);
          responsesApi.push({
            ...response,
            apiName,
            status: 200
          });
        } catch (error: any) {
          responsesApi.push({
            apiName,
            hostname: 'OUTAGE',
            message: 'Error',
            timeo: error.config.timeout,
            status: error.code,
            success: false
          });
        }
      }
      setIsLoading(false)
      console.log(responsesApi)
      setResponses(responsesApi)
    };

    void fetchApiStatus();

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const intervalId = setInterval(fetchApiStatus, 15000);

    return () => { clearInterval(intervalId); };
  }, [])




  return { responses, isLoading }
}