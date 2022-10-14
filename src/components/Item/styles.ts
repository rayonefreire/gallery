import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const widthItem = width * 20 / 100;
console.log(widthItem)

export const styles = StyleSheet.create({
  image: {
    height: 80,
    width: widthItem,
    margin: 1,
  }
});