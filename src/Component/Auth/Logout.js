import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './Logout.module.css';



const LogoutScreen = () => {
  const authCtx = useContext(AuthContext);

  const handleLogout = () => {
    authCtx.logout();
  };
  if (!authCtx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>LOG OUT </h1>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout} className={classes.logoutContainer}>
  Log Out
</button>

    </div>
  );
};

export default LogoutScreen;