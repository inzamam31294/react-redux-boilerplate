/* ========================================== *
 * Hook for User Management
 *
 * ========================================== */

import { useMemo } from "react";

function useUser() {
  return useMemo(
    () => ({
      login: () => {
        return;
      },
    }),
    []
  );
}

export default useUser;
