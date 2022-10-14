import React, { useEffect, useState, useContext } from 'react';

import {
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as LocalAuthentication from 'expo-local-authentication';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { Context } from '../../context';

export function SignIn(){
  const [isFaceId, setIsFaceId] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setIsAuthentication } = useContext(Context);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsFaceId(compatible);
    })();
  });

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter Password',
    });

    auth.then(result => {
      setLoading(true);

      setTimeout(() => {
        setIsAuthentication(result.success);
      }, 1000);
        console.log(result);
    });
  }
  
  return (
    <View style={styles.container}>
      {
        !loading ?
        <AntDesign name="lock1" size={80} color="#017DFF"/> :
        <ActivityIndicator size='large' color='#017DFF' />
      }

      <Text style={styles.text}>
        Desbloqueie para ver suas fotos
      </Text>

      <Button
        title='Entrar'
        onPress={onAuthenticate}
      />
    </View>
  );
}