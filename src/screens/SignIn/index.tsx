import React from 'react';

import {
  View
} from 'react-native';

import LottieView from 'lottie-react-native';

import animation from '../../lf30_editor_0ex69tzs.json';

import { styles } from './styles';

export function SignIn(){
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        source={animation}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </View>
  );
}