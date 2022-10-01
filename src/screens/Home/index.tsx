import React, { useEffect, useState } from 'react';

import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Item } from '../../components/Item';
import { styles } from './styles';

export function Home(){
  const [images, setImages] = useState([]);

  const navigation = useNavigation();

  // catador de imagens
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    if (pickerResult.cancelled === true) {
      return;
    }

    if (pickerResult.uri in images) {
      Alert.alert("Ops!", "Você já adicionou essa imagem.");
      return;
    } else {
      images.push(pickerResult.uri);

      AsyncStorage.setItem("@IMAGES", JSON.stringify(images));
      getImages();
    }
  };

  // atualiza a lista de imagens
  async function getImages() {
    const lista = await AsyncStorage.getItem("@IMAGES");

    if (lista !== null) {
      setImages(JSON.parse(lista));
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        extraData={images}
        renderItem={({ item }) =>
          <Item
            onPress={() => navigation.navigate("ImageView", { item })}
            image={item}
          />
        }
        style={{ paddingTop: 70, marginHorizontal: -1 }}
        numColumns={5}
        horizontal={false}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>Fotos</Text>
            
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={openImagePickerAsync}
            >
              <Text style={styles.titleButton}>Adicionar Imagem</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}