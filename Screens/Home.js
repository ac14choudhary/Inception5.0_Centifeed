import React, {useState, useEffect} from 'react';
import LottieView from 'lottie-react-native';
import Snackbar from 'react-native-snackbar';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ImageBackground,
  StatusBar,
} from 'react-native';
import axios from 'axios';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Home({navigation}) {
  const [input, setInput] = useState(null);

  function postApi() {
    if (!input) {
      Snackbar.show({
        text: 'Please enter a VALID Sentence',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#ff6666',
        action: {
          text: 'OK',
          textColor: 'White',
          onPress: () => {},
        },
      });
    } else {
      axios
        .post('https://ayushfirst.herokuapp.com/test/' + input.trim())
        .then(res => {
          var response = res.data;
          navigation.navigate('Results', {input, response});
        });
      Snackbar.show({
        text: 'VALID Sentence recorded',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#75B759',
      });
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#DCF0F7" />
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/BG.png')}
          resizeMode={'cover'}
          style={{height: height, width: width, flex: 1}}>
          <View style={styles.PrimaryGrid}>
            <View style={styles.GridElement1}>
              <Text style={styles.GridElement1Text}>Welcome to Sentifeed</Text>
              <Text style={styles.GridElement1Text2}>
                An approach to bind NLP and ML together to detect the emotions
                and sentiments of a person through textual format.
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
                    textAlignVertical="top"
                    multiline
                    numberOfLines={4}
                    maxLength={100}
                    value={input}
                    style={{
                      alignSelf: 'flex-start',
                      width: '100%',
                      color: 'black',
                      paddingHorizontal: 10,
                    }}
                    placeholder="The workshop was amazing, would love to attend again "
                    placeholderTextColor="#cccccc"
                    onChangeText={value => setInput(value)}></TextInput>
                </View>
                <View style={styles.SubmitButton}>
                  <TouchableOpacity
                    onPress={value => setInput('')}
                    style={styles.Button1}>
                    <Text style={{alignSelf: 'center', color: '#26538E'}}>
                      Clear
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      postApi(input);
                      // if (!input) {
                      //   Snackbar.show({
                      //     text: 'Please enter a VALID Sentence',
                      //     duration: Snackbar.LENGTH_LONG,
                      //     backgroundColor: '#ff6666',
                      //     action: {
                      //       text: 'OK',
                      //       textColor: 'black',
                      //       onPress: () => {},
                      //     },
                      //   });
                      // } else {
                      //   navigation.navigate('Results', {paramKey: input});
                      //   Snackbar.show({
                      //     text: 'VALID Sentence recorded',
                      //     duration: Snackbar.LENGTH_SHORT,
                      //     backgroundColor: '#75B759',
                      //   });
                      // }
                    }}
                    style={styles.Button2}>
                    <Text style={{alignSelf: 'center', color: 'white'}}>
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.GridElement3}>
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
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  PrimaryGrid: {flex: 1, flexDirection: 'column'},
  GridElement1: {flex: 3, flexDirection: 'column', justifyContent: 'center'},
  GridElement1Text: {
    color: '#26538E',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 5,
    fontFamily: 'Montserrat-Black',
  },
  GridElement1Text2: {
    color: '#121212',
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  GridElement2: {flex: 6, paddingBottom: 10, paddingTop: 10},
  GridElement2Card: {
    flex: 1,
    width: (width * 9.5) / 10,
    borderRadius: 5,
    height: '100%',
    alignSelf: 'center',
    backgroundColor: '#DCF0F7',
    elevation: 4,
  },
  CardHeading: {
    flex: 3,
    justifyContent: 'center',
    marginLeft: 15,
  },
  CardHeadingText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#26538E',
  },
  CardInput: {
    flex: 5,
    width: (width * 8.6) / 10,
    borderRadius: 5,

    backgroundColor: 'white',
    alignSelf: 'center',
  },
  SubmitButton: {
    flex: 3,
    justifyContent: 'center',
    alignSelf: 'flex-end',

    flexWrap: 'wrap',
  },
  Button1: {
    marginRight: 15,

    width: (width * 3) / 10,
    height: (width * 2) / 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#26538E',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  Button2: {
    marginRight: 15,
    width: (width * 3) / 10,
    height: (width * 2) / 20,
    borderRadius: 4,

    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#26538E',
  },

  GridElement3: {flex: 8},
});
