/* ========================================== *
 * Hook for Posts Management
 *
 * ========================================== */

// import { AxiosResponse } from "axios";
import { useMemo } from "react";

// import type { ContractHttpResponse } from "src/types";
import useHttp from "./useHttp";

function usePosts() {
  const prefix = "";
  const API_VERSION = "";
  const api = useHttp({ prefix, API_VERSION });

  return useMemo(
    () => ({
      getPosts: () => {
        const path = "/posts";
        return api.GET({ path });
      },
    }),
    [api]
  );
}

export default usePosts;
