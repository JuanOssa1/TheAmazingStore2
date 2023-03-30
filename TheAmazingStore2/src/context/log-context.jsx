import { createContext } from 'react';

const LogContext = createContext({
  setValidity: () => {},
  isValid: true,
  user: 'Juan David',
  isLogged: false,
  hotels: [],
});

export default LogContext;
