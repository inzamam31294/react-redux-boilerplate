/* ========================================================================== *
 * Context: Authentication
 *
 * ========================================================================== */

import type { Context, PropsWithChildren, ReactElement } from "react";
import { createContext, useContext, useMemo } from "react";
import type { UseAuthActions } from "src/hooks/authAction";
import { useAuthAction } from "src/hooks/authAction";
import { noopPromise } from "src/utils";

interface Session {
  isValid: boolean;
  user: any;
}
export interface AuthContext extends UseAuthActions {
  validate: () => Promise<boolean>;
  session: Session;
}

const AuthContext: Context<AuthContext> = createContext<AuthContext>({
  login: noopPromise as any,
  logout: noopPromise as any,
  signup: noopPromise as any,
  validate: () => Promise.resolve(false),
  session: {
    isValid: false,
    user: null,
  },
});

export default function AuthProvider({
  children,
}: PropsWithChildren<any>): ReactElement {
  const authActions = useAuthAction();

  const contextValue: AuthContext = useMemo(() => {
    function logout() {
      return authActions.logout();
    }
    function validate() {
      return Promise.resolve(false);
    }

    const session = { isValid: false, user: null };

    return {
      logout,
      validate,
      login: authActions.login,
      signup: authActions.signup,
      session,
    };
  }, [authActions]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuthContext(): AuthContext {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("context must be used within a AuthProvider");
  }

  return context;
}
