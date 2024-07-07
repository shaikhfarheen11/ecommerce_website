import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './store/auth-context';

function PrivateRoute({ element }) {
  const authCtx = useContext(AuthContext);

  return authCtx.isLoggedIn ? (
    element
  ) : (
    <Navigate to="/login" replace={true} />
  );
}

export default PrivateRoute;