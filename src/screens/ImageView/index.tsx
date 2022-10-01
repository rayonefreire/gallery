import React from 'react';

import {
  View,
  Image,
  SafeAreaView
} from 'react-native';

import { styles } from './styles';

export function ImageView({ route }){
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: item }}
        resizeMode="contain"
        style={{
          height: '85%',
          width: '100%',
          marginBottom: 20,
        }}
      />
    </SafeAreaView>
  );
}