import React from 'react';
import LottieView from 'lottie-react-native';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Spalsh({navigation}) {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#BDE8FD" />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ImageBackground
          source={require('../assets/BG.png')}
          resizeMode={'cover'}
          style={{
            height: height,
            width: width,
            flex: 1,
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/SENTIFEED.png')}
            resizeMode="contain"
            style={{
              width: width / 1.4,
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
            }}></Image>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Welcome: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
