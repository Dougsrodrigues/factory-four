export interface IStatusAPIResponse {
  success: boolean;
  message: string;
  hostname: string;
  timeo?: number;
}