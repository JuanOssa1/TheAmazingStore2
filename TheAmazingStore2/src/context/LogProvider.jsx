import React from 'react';
import LogContext from './log-context';
import { useState } from 'react';

function LogProvider({ children }) {
  const [isValid, setValid] = useState(true);

  const setValidity = (value) => {
    setValid(value);
  };

  const logContext = {
    setValidity,
    isValid,
    user: 'Juan David',
    hotels: [],
  };

  return (
    <LogContext.Provider value={logContext}>{children}</LogContext.Provider>
  );
}

export default LogProvider;
