import { AxiosInstance, DefaultResponse } from 'axios';

/**
 * Response Success Handler
 */
const responseSuccessHandler = res => {
  const response: DefaultResponse = res.data;

  if (200 <= res.status && res.status < 300) {
    return response.data;
  } else {
    return responseErrorHandler(res);
  }
};

/**
 * Response Fail handler
 */
const responseErrorHandler = err => {
  return Promise.reject(err);
};

/**
 * Request Success Handler
 */
const requestSuccessHandler = config => {
  return config;
};

/**
 * Request Fail Handler
 */
const requestErrorHandler = err => {
  return Promise.reject(err);
};

export const generateResponseInterceptors = (axiosInstance: AxiosInstance) => {
  /**
   * Axios Response Middleware
   */
  axiosInstance.interceptors.response.use(
    res => responseSuccessHandler(res),
    err => responseErrorHandler(err),
  );

  /**
   * Axios Request Middleware
   */
  axiosInstance.interceptors.request.use(
    config => requestSuccessHandler(config),
    err => requestErrorHandler(err),
  );
};
