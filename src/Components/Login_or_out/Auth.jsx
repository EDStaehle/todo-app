import React, { useContext } from 'react';
import { AuthContext } from '../../context/Auth';
import { When } from 'react-if';

const Auth = ({ capability, children }) => {
  const { isLoggedIn, can } = useContext(AuthContext);
  return <When condition={isLoggedIn && can(capability)}>{children}</When>;
};
export default Auth;
