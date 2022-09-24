/* ========================================================================== *
 * Hook: Authentication Actions
 *
 * ========================================================================== */

import { useMemo } from "react";

export interface UseAuthActions {
  login: (username: string, password: string) => Promise<any | Error>;
  signup: (username: string, password: string) => Promise<any | Error>;
  logout: () => Promise<null>;
}

function useAuthAction(): UseAuthActions {
  return useMemo<UseAuthActions>(
    () => ({
      login: (username, password) => {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve({ username, password }), 300);
        });
        return promise.then((res) => res);
      },
      signup: (username, password) => {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve({ username, password }), 300);
        });
        return promise.then((res) => res);
      },
      logout: () => {
        const promise = new Promise((resolve) => {
          setTimeout(() => resolve(true), 300);
        });
        return promise.then(() => {
          return null;
        });
      },
    }),
    []
  );
}

export default useAuthAction;
