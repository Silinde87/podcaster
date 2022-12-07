import axios, { AxiosResponse } from 'axios';
import { API_URL } from 'utils/constants/api.constants';
import { defaultHeaders, buildPath, ServiceOptions, generateHeaders } from './helpers';

const httpServices = () => {
  const httpInstance = axios.create({
    baseURL: API_URL,
    headers: defaultHeaders,
    // withCredentials: true,
    timeout: 0,
  });

  /**
   * @name GET
   * @description make a GET request
   * @param {Object} options - options to make the GET resquest.
   * @param {string} options.path - the path for the GET request.
   */
  const GET = async (options: ServiceOptions) => {
    const path = buildPath(options);
    await generateHeaders(httpInstance);

    return httpInstance
      .get(path)
      .then(response => {
        const _response = response as AxiosResponse;
        return _response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  };

  /**
   * @name POST
   * @description make a POST request
   * @param {ServiceOptions} options - options to make the POST resquest.
   * @param {string} options.path - the path for the POST request.
   * @param {Object} options.data - Object with body values.
   */
  const POST = async (options: ServiceOptions) => {
    const path = buildPath(options);
    await generateHeaders(httpInstance);

    return httpInstance
      .post(path, options.data)
      .then(response => {
        const _response = response as AxiosResponse;
        return _response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  };

  /**
   * @name PUT
   * @description make a PUT request
   * @param {Object} options - options to make the PUT resquest.
   * @param {string} options.path - the path for the PUT request.
   * @param {Object} options.data - Object with body values.
   */
  const PUT = async (options: ServiceOptions) => {
    const path = buildPath(options);
    await generateHeaders(httpInstance);

    return httpInstance
      .put(path, options.data)
      .then(response => {
        const _response = response as AxiosResponse;
        return _response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  };

  /**
   * @name DELETE
   * @description make a DELETE request
   * @param {Object} options - options to make the DELETE resquest.
   * @param {string} options.path - the path for the DELETE request.
   */
  const DELETE = async (options: ServiceOptions) => {
    const path = buildPath(options);
    await generateHeaders(httpInstance);

    return httpInstance
      .delete(path)
      .then(response => {
        const _response = response as AxiosResponse;
        return _response.data;
      })
      .catch(error => {
        throw error.response.data;
      });
  };

  return {
    GET,
    POST,
    PUT,
    DELETE,
  };
};

export default httpServices();
