import React from 'react';
import LottieView from 'lottie-react-native';
import {
  View,
  StyleSheet,
  button,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Home({navigation}) {
  return (
    <View style={styles.Base}>
      <View style={styles.PrimaryGrid}>
        <View style={styles.GridElement1}>
          <Text style={styles.GridElement1Text}>Welcome to Centifeed</Text>
          <Text style={styles.GridElement1Text2}>
            Centifeed provides you an with your Sentiment as an output of the
            statement
          </Text>
        </View>
        <View style={styles.GridElement2}>
          <View style={styles.GridElement2Card}>
            <View style={styles.CardHeading}></View>
            <View style={styles.CardInput}></View>
            <View style={styles.CardButton}></View>
          </View>
        </View>
        <View style={styles.GridElement3}>
          <LottieView
            source={require('../Assets/Centifeed.json')}
            autoPlay
            loop
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Base: {
    flex: 1,
    backgroundColor: 'white',
  },
  PrimaryGrid: {flex: 1, flexDirection: 'column'},
  GridElement1: {flex: 2, flexDirection: 'column'},
  GridElement1Text: {
    color: '#29B8DB',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 10,
  },
  GridElement1Text2: {
    color: '#121212',
    fontSize: 15,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  GridElement2: {flex: 5},
  GridElement2Card: {
    flex: 1,
    width: (width * 9.5) / 10,
    borderRadius: 10,
    height: '100%',
    alignSelf: 'center',
    elevation: 6,
  },
  CardHeading: {
    flex: 2,
    backgroundColor: '#333333',
  },
  CardInput: {
    flex: 8,
    backgroundColor: '#555555',
  },
  CardButton: {
    flex: 3,
    backgroundColor: '#999999',
  },

  GridElement3: {flex: 6},
});
