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
        source={require('../Assets/BG.png')}
        resizeMode={'cover'}
        style={{height: height, width: width}}></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({});
