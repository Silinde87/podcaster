import { AxiosInstance } from 'axios';
import { API_URL } from 'utils/constants/api.constants';

export type ServiceOptions = {
  path: string;
  data?: object;
};

export interface IError {
  message: string;
  name: string;
  stack: null;
  statusCode: number | undefined;
}

const defaultHeaders = {};

/**
 * @name buildPath
 * @description create the api path
 */
const buildPath = (options: ServiceOptions): string => {
  return API_URL + options.path;
};

/**
 * @name generateHeaders
 * @description Generate the required headers for API calls
 * @param {AxiosInstance} axiosInstance - Axios Instance
 */
const generateHeaders = async (axiosInstance: AxiosInstance) => {
  if (axiosInstance && axiosInstance.defaults.headers) {
    // axiosInstance.defaults.headers['header'] = 'header';
  }
};

export { defaultHeaders, buildPath, generateHeaders };
