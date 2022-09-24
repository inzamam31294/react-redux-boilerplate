/* ========================================================================== *
 * Hook: API
 *
 * Authenticated REST API
 *
 * NOTE: This hook is designated for authenticated API requests with graceful
 * failure. (useHttp) remains siloed from this module for non-authenticated
 * requests utilization.
 * ========================================================================== */

import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { useMemo } from "react";

interface AxiosConstructor {
  prefix: string;
  timeout?: number;
  API_VERSION?: string;
}

function useApi({ prefix, timeout, API_VERSION = "/v1" }: AxiosConstructor) {
  const token = "something";

  function initializeResponseInterceptors() {
    axios.interceptors.response.use(handleResponse, handleError);
  }

  function initializeRequestInterceptors() {
    axios.interceptors.request.use(handleRequest, handleError);
  }

  function handleResponse(data: AxiosResponse) {
    // const response = {
    //   Success: true,
    //   body: data,
    // };

    return data;
  }

  function handleError(error: AxiosError) {
    return Promise.reject(error);
  }

  function handleRequest(config: any) {
    config.baseURL = process.env.REACT_APP_BASE_URL + API_VERSION + prefix;
    config.timeout = timeout;
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  }

  initializeResponseInterceptors();
  initializeRequestInterceptors();

  return useMemo(
    () => ({
      GET: async ({ path, headers = {}, params = {} }: any) => {
        const response = await axios.get(path, { headers, params });
        return response;
      },
      POST: async ({ path, headers = {}, body, params = {} }: any) => {
        const response = await axios.post(path, body, { headers, params });
        return response;
      },
      PUT: async ({ path, headers = {}, body, params = {} }: any) => {
        const response = await axios.post(path, body, { headers, params });
        return response;
      },
      DELETE: async ({ path, config }: any) => {
        const response = await axios.delete(path, config);
        return response;
      },
    }),
    []
  );
}

export default useApi;
