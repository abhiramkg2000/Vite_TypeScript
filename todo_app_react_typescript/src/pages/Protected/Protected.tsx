import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

type ProtectedProps = {
  isLoggedIn: boolean;
  children: ReactElement;
};

function Protected({ isLoggedIn, children }: ProtectedProps) {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
}
export default Protected;
