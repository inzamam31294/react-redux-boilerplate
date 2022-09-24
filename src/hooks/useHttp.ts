/* ========================================================================== *
 * Hook: Http API
 *
 * Non-Authenticated REST API
 *
 * NOTE: This hook is designated for Non-authenticated API requests with graceful
 * failure. (useAPI) remains siloed from this module for authenticated
 * requests utilization.
 * ========================================================================== */

import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { useMemo } from "react";

interface AxiosConstructor {
  prefix: string;
  API_VERSION?: string;
  timeout?: number;
}

function useHttp({ prefix, API_VERSION = "/v1", timeout }: AxiosConstructor) {
  function initializeResponseInterceptors() {
    axios.interceptors.response.use(handleResponse, handleError);
  }

  function initializeRequestInterceptors() {
    axios.interceptors.request.use(handleRequest, handleError);
  }

  function handleResponse(response: AxiosResponse) {
    return response;
  }

  function handleError(error: AxiosError) {
    return Promise.reject(error);
  }

  function handleRequest(config: AxiosRequestConfig) {
    config.baseURL = process.env.REACT_APP_BASE_URL + API_VERSION + prefix;
    config.timeout = timeout;

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

export default useHttp;
