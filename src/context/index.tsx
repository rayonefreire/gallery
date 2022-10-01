import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';

type Props = {
  albuns: {
    title: string;
    photos: [
      string,
    ];
  }[];
  getAlbum() : Promise<void>;
}

type Children = {
  children: any;
}

export const Context = createContext({} as Props);

export function Provider({ children } : Children ) {
  const [albuns, setAlbuns] = useState([]);

  async function getAlbum() {
    const album = await AsyncStorage.getItem("@ALBUNS");

    if (album !== null) {
      setAlbuns(JSON.parse(album));
    }
  }

  return (
    <Context.Provider value={{
      albuns,
      getAlbum,
    }}>
      { children }
    </Context.Provider>
  );
}