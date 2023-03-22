import { createContext } from 'react';

const LogContext = createContext({
  user: '',
  hotels: [],
  addHotel: (hotel) => {},
});
