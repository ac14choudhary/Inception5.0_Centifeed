import React from 'react';
import {
  View,
  StyleSheet,
  button,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Results({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/BG.png')}
        resizeMode={'cover'}
        style={{
          height: height,
          width: width,
          flex: 1,
          flexDirection: 'column',
        }}>
        <View style={styles.one}></View>
        <View style={styles.two}></View>
        <View style={styles.three}></View>
        <View style={styles.four}></View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  one: {
    flex: 2,
    backgroundColor: '#999999',
  },
  two: {
    flex: 3,
    backgroundColor: '#777777',
  },
  three: {
    flex: 3,
    backgroundColor: '#333333',
  },
  four: {
    flex: 4,
    backgroundColor: '#000000',
  },
});
