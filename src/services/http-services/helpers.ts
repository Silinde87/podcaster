import { AxiosInstance } from 'axios';

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

const apiUrl: string = `https://itunes.apple.com`;

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

/**
 * @name buildPath
 * @description create the api path
 */
const buildPath = (options: ServiceOptions): string => {
  return apiUrl + options.path;
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

export { defaultHeaders, buildPath, generateHeaders, apiUrl };
