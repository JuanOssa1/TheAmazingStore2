import { createContext } from 'react';

const LogContext = createContext({
  approveLogin: () => {},
  getValidity: () => {},
  user: 'Juan David',
  isLogged: false,
  hotels: [],
});

export default LogContext;
