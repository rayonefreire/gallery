import React from 'react';

import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  image: string;
}

export function Item({ image, ...rest } : Props ){
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
    >
      <Image
        style={styles.image}
        source={{ uri: image }}
      />
    </TouchableOpacity>
  );
}