import axios from 'axios';
import { defaultHeaders, buildPath, ServiceOptions, generateHeaders, apiUrl } from './helpers';
import { generateResponseInterceptors } from './interceptors';

const httpServices = () => {
  const httpInstance = axios.create({
    baseURL: apiUrl,
    headers: defaultHeaders,
    withCredentials: true,
    timeout: 0,
  });

  generateResponseInterceptors(httpInstance);

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
      .then(response => response)
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
      .then(response => response)
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
      .then(response => response)
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
      .then(response => response)
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
