/* ========================================================================== *
 * Template: PrivateRoute
 *
 * Please use within Layout component.
 * ========================================================================== */

import { Navigate, useNavigate } from "react-router-dom";
import type { FunctionComponent } from "react";
import { useEffect } from "react";
import type { AuthContext } from "src/contexts/AuthContext";
import { useAuthContext } from "src/contexts/AuthContext";

const PrivateRoute: FunctionComponent = ({ children }: any) => {
  const { session, validate }: AuthContext = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    async function authenticate() {
      const isValid = await validate();
      if (!isValid) {
        navigate("/", { replace: true });
      }
    }

    authenticate();
  }, []);

  if (!session.isValid) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
