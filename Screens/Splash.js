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
        <View>
          <LottieView
            style={{
              alignSelf: 'center',
              width: width - 5,
              height: height / 2.5,
            }}
            source={require('../assets/Centifeed.json')}
            autoPlay
            loop
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Welcome: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
