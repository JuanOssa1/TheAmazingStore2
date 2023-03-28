import React from 'react';
import LogContext from './log-context';
import { useState } from 'react';

function LogProvider({ children }) {
  const [isValid, setValid] = useState(false);

  const validateLogin = () => {
    setValid(true);
    return isValid;
  };
  const getValidity = () => {
    return isValid;
  };

  const logContext = {
    approveLogin: validateLogin,
    getValidity,
    user: 'Juan David',
    isLogged: false,
    hotels: [],
  };

  return (
    <LogContext.Provider value={logContext}>{children}</LogContext.Provider>
  );
}

export default LogProvider;
