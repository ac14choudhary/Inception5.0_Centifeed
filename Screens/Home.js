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
  TextInput,
  ImageBackground,
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
            <View style={styles.CardHeading}>
              <Text style={styles.CardHeadingText}>
                Please enter your Statement -
              </Text>
            </View>
            <View style={styles.CardInput}>
              <TextInput
                style={{
                  alignSelf: 'flex-start',
                  width: '100%',
                  color: 'black',
                }}></TextInput>
            </View>
            <View style={styles.CardButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Results')}
                style={styles.Button}>
                <Text style={{alignSelf: 'center', color: 'white'}}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
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
  },
  PrimaryGrid: {flex: 1, flexDirection: 'column'},
  GridElement1: {flex: 2, flexDirection: 'column'},
  GridElement1Text: {
    color: '#26538E',
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
  GridElement2: {flex: 5, paddingBottom: 10, paddingTop: 10},
  GridElement2Card: {
    flex: 1,
    width: (width * 9.5) / 10,
    borderRadius: 5,
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#DCF0F7',
  },
  CardHeading: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 15,
  },
  CardHeadingText: {
    fontWeight: 'bold',
  },
  CardInput: {
    flex: 8,
    width: (width * 8.6) / 10,
    borderRadius: 5,
    height: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  CardButton: {
    flex: 4,
    justifyContent: 'center',
  },
  Button: {
    marginRight: 15,
    margin: 10,
    width: (width * 3) / 10,
    height: (width * 2) / 20,
    borderRadius: 4,

    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#26538E',
  },

  GridElement3: {flex: 6},
});
