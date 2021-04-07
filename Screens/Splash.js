import React from 'react';

import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default function Spalsh({navigation}) {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Text style={styles.Welcome}>Welocme to the Splash Screen</Text>
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
