import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';

type Props = {
  isAuthentication: boolean;
  setIsAuthentication: React.Dispatch<React.SetStateAction<boolean>>;
}

type Children = {
  children: any;
}

export const Context = createContext({} as Props);

export function Provider({ children } : Children ) {
  const [isAuthentication, setIsAuthentication] = useState(false);

  return (
    <Context.Provider value={{
      isAuthentication,
      setIsAuthentication
    }}>
      { children }
    </Context.Provider>
  );
}